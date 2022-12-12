const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  try {
    let data = await fs.writeFile(fileName, fileContent, { encoding: "utf-8" });
    console.log("New file is created");
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const myFileReader = async (fileName) => {
  try {
    console.log("Reading a file is executed");
    let data = await fs.readFile(fileName, { encoding: "utf-8" });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    console.log("Updating file is executed");
    let data = await fs.appendFile(fileName, fileContent, {
      encoding: "utf-8",
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const myFileRename = async (fileName, newFile) => {
  try {
    console.log("Renaming a file is executed");
    let data = await fs.rename(fileName, newFile, {
      encoding: "utf-8",
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    console.log("File is deleted");
    let data = await fs.unlink(fileName, { encoding: "utf-8" });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  myFileWriter,
  myFileUpdater,
  myFileReader,
  myFileRename,
  myFileDeleter,
};
