const fs = require("fs");

var objData = {
	name: "Hung",
	age: 18
}

//Json
// console.log("Data: " + JSON.stringify(objData));

// console.log("Start write file here");

// fs.writeFile("text.txt", JSON.stringify(objData), (err) => {
// 	if(err) console.log(err)
// 	else console.log("Write file successfully!");
// });

// console.log("End write file here");


console.log("Start read file here");

var fileDataSync = fs.readFileSync("text.txt", {encoding: "utf-8"});

console.log(JSON.parse(fileDataSync).name);
console.log("End read file here");