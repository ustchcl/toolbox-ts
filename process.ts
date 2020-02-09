import * as cp from 'child_process';

export function exec(cmd: string): cp.ChildProcess {
    return cp.exec(cmd, (err, sto, ste) => {
        if (err) {
            console.log(err.stack);
            console.log(ste);
        } else {
            console.log(sto);
        }
    });
}