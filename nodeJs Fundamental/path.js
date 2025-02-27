const path = require("path");
console.log(path.join(__dirname, ".."));
console.log(path.resolve("second", "first"));
const fullpath = path.resolve("second", "first.js");

console.log(path.parse(fullpath));

console.log("разделитель в OC", path.sep);
console.log("Проверка на абсолютный путь", path.isAbsolute("first/second"));
console.log("Название файла", path.basename(fullpath));
console.log("расширение файла", path.extname(fullpath));


// -------------------------------------------------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123' 

const url = new URL(siteURL);

console.log(url)