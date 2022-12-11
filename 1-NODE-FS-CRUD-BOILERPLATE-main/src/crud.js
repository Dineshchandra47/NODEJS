let fs = require("fs");

fs.writeFile("crud.txt", "New CRUD file is created", (error, data) => {
  console.log("new file is created");
});

// fs.readFile('crud.txt', 'utf-8', (error,data)=>{
//      console.log('reading file is completed');
//      console.log(data)
// } )

// fs.appendFile('crud.txt','\n New file is created in new line', (error, data) => {
//      console.log('file is created');
// })

// fs.unlink('fie.js',(eror, data)=>{

//      console.log('file is deleted')
// });
