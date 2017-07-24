import fs from 'fs';

const saveToFile = (data) =>{
    console.log(data);
    console.log(fs);
    // fs.writeFile('message.txt', 'Hello Node.js', (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });
}
export default saveToFile;