import { stringify } from "node:querystring";
import * as path from 'path';
import * as rd from 'readline';

const fs = require('fs');
const stream = require('stream');
let count = 0;

export class CommentAnalyzer{
    file: any;
    
    constructor(file: any) {
        this.file = file;
    }

analyser() : Map<string, number>{
       let resultMap = new Map<string, number>();
       const rl = rd.createInterface({
           input: fs.createReadStream(path.resolve(__dirname, this.file)),
           crlfDelay: Infinity
    });
    rl.on('line', (line) => {
        console.log(line);
        // switch(line){ 
        //     case 
        // }
    });
    return resultMap;
}


incOccurrence (countMap: Map<string, number> , key: string){
    if(countMap.has(key) == false) {
       countMap.set(key, 0);
    }else{
        countMap.set(key, count + 1);
    }
    console.log(countMap);
}




}