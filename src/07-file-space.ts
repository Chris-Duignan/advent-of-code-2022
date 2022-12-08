import { fetchInput } from "./utils/fetch-input";

interface File {
  fileName: string;
  fileSize: number;
  childFiles?: Array<File>;
}

export function convertInput(path: string) {
  const input = fetchInput(path).split("\n");

  let output: Array<File> = [];

  input.forEach((line) => {
    if (line.includes("$ cd ") && !line.includes("..")) {
      output.push({
        fileName: line.split(/\$ cd /)[1],
        fileSize: 0,
        childFiles: [],
      });
    }
    if (/\$ cd \.\./.test(line)) {
      const dir = output.pop();
      if (dir && dir.childFiles) {
        dir.fileSize = dir.childFiles.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.fileSize;
        }, 0);
        output[output.length - 1].childFiles!.push(dir!);
      }
    }

    if (/^\d+/.test(line)) {
      const file = line.split(" ");
      output[output.length - 1].childFiles!.push({
        fileName: file[1],
        fileSize: parseInt(file[0]),
      });
    }
  });

  while (output.length !== 1) {
    const dir = output.pop();
    if (dir && dir.childFiles) {
      dir.fileSize = dir.childFiles.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.fileSize;
      }, 0);
    }
    output[output.length - 1].childFiles!.push(dir!);
  }

  if (output[0] && output[0].childFiles) {
    output[0].fileSize = output[0].childFiles.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.fileSize;
      },
      0
    );
  }

  return output;
}

export function getFileSizes(fileSystem: Array<File>): number {
  let count: number = 0;

  fileSystem.forEach((file) => {
    if (file.childFiles) {
      if (file.fileSize <= 100000) {
        count += file.fileSize;
      }
      count += getFileSizes(file.childFiles);
    }
  });

  return count;
}

export function findDirToDelete(fileSystem: Array<File>){
  let dirSize: number = fileSystem[0].fileSize;
  let deleteSize: number = fileSystem[0].fileSize - (70000000 - 30000000);

  function findDir(fileSystem: Array<File>) {
    fileSystem.forEach((file) => {
      if (file.childFiles) {
        if (file.fileSize > deleteSize && file.fileSize < dirSize) {
          dirSize = file.fileSize;
        }
        dirSize = findDir(file.childFiles)
      }
    })
    return dirSize
  }

  return findDir;
}