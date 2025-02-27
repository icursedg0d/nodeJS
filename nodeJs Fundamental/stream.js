const fs = require("fs");
const path = require("path");

// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));
// // Один чанк по дефолту 64кб
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("open", () => {
//   console.log("Start");
// });

// stream.on("end", () => {
//   console.log("END");
// });

// stream.on("error", (err) => {
//   console.log(err);
// });

const wriatableStream = fs.createWriteStream(
  path.resolve(__dirname, "test.txt")
);

for (let i = 0; i < 20; i++) {
  wriatableStream.write(i + "\n");
}
wriatableStream.end();
