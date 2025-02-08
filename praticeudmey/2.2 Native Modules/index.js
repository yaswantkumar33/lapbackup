const fs = require("fs");       /*fs-file system */

// fs.writeFile('msg.txt','hey hello this is the file created  from the node fs  method',(err)=>{
//     if(err)throw err;
//     console.log('file created sucesfuly');
// })


fs.readFile('msg.txt','utf8' ,(err, data) => {
  if (err) throw err;
    console.log(data);
}); 