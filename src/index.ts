
import {program} from 'commander';

async function main(){

    program.option('--config');
    program.parse();

    const opts = program.opts();
    console.log(opts);

}
main();