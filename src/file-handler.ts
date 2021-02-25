const folder = '../docs/';
const fs = require('fs');
const path = require('path');
import {CommentAnalyzer} from './comment-analyser';


export class FileHandler{
    static getFile(){
        let totalResults = new Map<string, number>();
        let comments : File[] ;
         fs.readdir(path.resolve(__dirname, folder), (err: any, files: any) => {
            if (err) {
                return console.log('Unable to read directory: ' + err);
            } 
            files.forEach(function (file: any) {
                let commentAnalyzer = new CommentAnalyzer(path.join(path.resolve(__dirname, folder), file));
                let fileResults = commentAnalyzer.analyser(); 
                fileResults.forEach((value: number, key: string) => {
                    console.log(key, value);
                });
            });
            console.log("RESULTS " + files);
            console.log("RESULTS\n=======" );
            
        });
    }

    addReportResults(source: Map<string, number>, target: Map<String, number>){

    }
}