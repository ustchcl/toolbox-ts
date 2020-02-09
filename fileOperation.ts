/// fs
import * as fs from "fs";
import * as Observable from "zen-observable";
import * as path from "path";

export module fileOperation {
    export function readAsLines(path: string, encoding: string = "utf-8"): Promise<Array<string>> {
        return read(path, encoding).then(_ => _.split('\n'));
    }

    export function read(path: string, encoding: string = "utf-8"): Promise<String> {
        return new Promise<string>((resolve, reject) => {
            fs.readFile(path, { encoding: encoding, flag: 'r'}, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
    }

    export function mkdir(path: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.mkdir(path, err => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    type filename = string;
    type EventType = "change" | "close" | "error";
    type Event = [EventType, filename];
    export function watch(filename: string): Observable<Event> {
        let observable = new Observable<Event>(observer => {
            fs.watch(filename, (eventType: EventType, fn) => {
                observer.next([eventType, fn]);
            })
        });
        return observable;
    }

    export async function open(file: fs.PathLike, mode: string): Promise<number> {
        return new Promise<number>((resolve, reject) => {
            fs.open(file, mode, (err, fd) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(fd);
            });
        });
    }

    export async function write(file: fs.PathLike, ...content: string[]) {
        const fd = await open(file, 'w');
        return new Promise<void>((resolve, reject) => {
            fs.writeFile(fd, Buffer.from(content.join(''), "utf-8"), err => {
                if (err) {
                    reject(err);
                    return ;
                }
                resolve();
                fs.close(fd, () => {});
            });
        })
    }

    export async function rename(oldName: string, newName: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            fs.rename(oldName, newName, (err) => {
                if (err) { reject(err); return }
                resolve();
            });
        });
    }

    export function stepByDir(dir: string, func: (_: fs.Dirent) => void) {
        fs.readdir(dir, {withFileTypes: true}, (err, files) => {
            if (err) {
                throw err;
            }
            files.filter(file => file.isFile()).forEach(func);
            files.filter(file => file.isDirectory()).forEach((f) => {
                stepByDir(path.join(dir,  f.name), func);
            })
        });
    }
}
