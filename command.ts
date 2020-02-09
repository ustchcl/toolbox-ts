import * as  commander from 'commander';
import { network } from './network';

const program = new commander.Command();
program.version('0.0.1');
program.option('-s, --static-server <dirpath>');
program.parse(process.argv);
if (program['staticServer']) {
    console.log(program.staticServer);
    network.startStaticServer(program.staticServer);
}