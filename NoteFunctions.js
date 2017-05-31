var fs = require('fs'),
    yargs= require('yargs'),
    _=require('lodash');


var ReadNote =()=>{
    try{
        var jsonNote = fs.readFileSync('messageJSON.json');
        //cosole.log(jsonNote.title);
        return JSON.parse(jsonNote);
    }
    catch(e){
        return [];
    }
};
function saveNote(notes){
    fs.writeFileSync('messageJSON.json',JSON.stringify(notes));
};
function addNote(title,msg){
    var notes = ReadNote();
    var note ={ title, msg };
    var dupNotes = notes.filter((note)=> note.title===title);
    if(dupNotes.length===0){
        notes.push(note);
        saveNote(notes);
        //fs.appendFile("logfile.txt",'\n'+Date.getDate()+': '+'Note added'+title+'->'+msg);
        return note;
    }
};
var deleteNote = (title)=>{
    console.log('Deleting Note.......\n');
    var notes= ReadNote();
    var newNotes=notes.filter((notes)=>notes.title!==title);
    saveNote(newNotes);
    if(newNotes.length===notes.length)
        return false;
    else return true;
    //fs.appendFile("logfile.txt",'\n'+Date.getDate()+': '+'Note added'+title+'->'+msg);    
};
var GetNote=(title)=>{
    var notes=ReadNote();
    var disNotes=notes.filter((notes)=>notes.title===title);
    console.log(disNotes);
    return disNotes[0]; 
};
module.exports={addNote,deleteNote,GetNote};