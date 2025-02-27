const fs = require("fs");
const path = require("path");

// fs.mkdirSync(path.resolve(__dirname,'dir', "dir2", "dir3"), {recursive: true})

// console.log("START")

// fs.mkdir(path.resolve(__dirname,'dir'), (err) => {
//   if(err){
//     console.log(err)
//     return;
//   }
//   console.log("Папка создана")
// })

// console.log("END")

// fs.rmdir(path.resolve(__dirname,'dir'), (err) => {
//   if(err){
//     throw err;
//   }

// })

// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "dkjdskjfskj sdjklfs dlkjf sjkldf kljsd",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Zapisano");
//   }
// );

// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   "END END END END",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("DOBAVLENO");
//   }
// );

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    })
  );
};

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, { encoding: "utf-8" }, (err) => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    })
  );
};

// removeFileAsync(path.resolve(__dirname, "test.txt"));

// writeFileAsync(path.resolve(__dirname, "test.txt"), "data")
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "test.txt"), "789"))
//   .then(() => readFileAsync(path.resolve(__dirname, "test.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const text = process.env.TEXT || "";

// writeFileAsync(path.resolve(__dirname, "text.txt"), text)
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => data.split(" ").length)
//   .then((count) =>
//     writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов ${count}`)
//   )
//   .then(() => removeFileAsync(path.resolve(__dirname, "text.txt")));
