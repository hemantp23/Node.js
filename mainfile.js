var fs= require('fs'),
    det= require('./details.js'),
    _ = require('lodash'),
    yargs = require('yargs'),
    noteF = require('./NoteFunctions.js');
var command = process.argv[2];
var y_args = yargs.argv;
//console.log('Command: ',y_args.command);
console.log(y_args);
if(y_args.command==='Add'){
    var note =noteF.addNote(y_args.title,y_args.msg);
    if(note){
        console.log("Note created");
    }
    else{
        console.log("Note title taken");
    }
}
else if (y_args.command==='Delete'){
    var delNote =noteF.deleteNote(y_args.title);
    if(delNote===true)
        console.log("Note deleted.");
    else console.log("Note doesn't exist.");
}
else if (y_args.command==='Display'){
    var disNote =noteF.GetNote(y_args.title);
    if(!disNote)
        console.log("Note doesn't exist.");
    else{
        console.log(`Note: ${disNote.title}`);
        console.log(`Message: ${disNote.msg}`);
    }
}
//fs.appendFile("logfile.txt",Date.now()+':'+y_args[0]+'\n');