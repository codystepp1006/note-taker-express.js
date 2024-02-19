const express = require('express');
const fs = require('fs');
let dbdata = '';
function readFromFile(){

let fileContent = fs.readFileSync("./Develop/db/db.json", "utf8");
setcurrentdata(JSON.stringify(fileContent));
return dbdata;
}

function setcurrentdata(_content){
dbdata = _content;
}


function readAndAppend(noteTitle, noteText){
console.log("Holy Fook we made a post")


    fs.readFile('./Develop/db/db.json', 'utf8', function fileParseDate(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data); //now it an object
        obj.push({title: noteTitle, text: noteText}); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFileSync('./Develop/db/db.json', json, 'utf8'); // write it back 
        setcurrentdata(json)
    }});
    return dbdata;
}




module.exports = {
    readFromFile,
    readAndAppend
}