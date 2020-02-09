
import { network } from './network';
import { fileOperation } from './fileOperation';
import { exec } from './process';
async function main() {
    const options = {
        hostname: 'encrypted.google.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

    // var response = await network.mkRequest(
    //     ["POST_FORM", 'http://nodejs.cn/upload', {msg: 'hello world'}]
    // );
    // console.log(response);

    // var ob = fileOperation.watch('./main.ts');
    // ob.subscribe(e => {
    //     console.log(e[0], e[1]);
    // })

    // fileOperation.write('./test.txt', "战略合作伙伴", "卧槽你打野的", "\n inlcude");
    // fileOperation.rename('./hah.txt', './test.txt');

    // fileOperation.stepByDir('/Users/huangchenglin/code/dart/common_used_functions', (dirent) => {
    //     if (dirent.name.toLowerCase().indexOf('dart') != -1) {
    //         console.log(dirent.name);
    //     }
    // })

    exec('ls -a');

}


main();
