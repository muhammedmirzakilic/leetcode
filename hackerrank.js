"use strict";

const fs = require("fs");
const https = require("https");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

const request = require("request");

function fetchRequest(url) {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (error) reject(error);
      else resolve(body);
    });
  });
}

async function getStockInformation(date) {
  console.log(date);
  const url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;
  const response = await fetchRequest(url);
  console.log(response);
  const result = JSON.parse(response);
  return result.data.length ? result.data[0] : {};
}

async function main() {
  const ws = fs.createWriteStream("./log/log.txt");

  const date = "5-January-1970";

  const result = await getStockInformation(date);
  const isEmpty = !Object.keys(result).length;
  if (isEmpty) {
    ws.write("No Results Found");
  } else {
    ws.write(`Open: ${result.open}\n`);
    ws.write(`High: ${result.high}\n`);
    ws.write(`Low: ${result.low}\n`);
    ws.write(`Close: ${result.close}\n`);
  }
}

(async () => {
  const name = ["ball", "box", "lamp", "brick", "ball"];
  const price = [2, 2, 2, 2, 2];
  const weight = [2, 2, 2, 2, 2];
  const res = await numDuplicates(name, price, weight);
  console.log(res);
})();

function numDuplicates(name, price, weight) {
  const duplicates = {};
  for (let index = 0; index < name.length; index++) {
    const key = name[index] + price[index] + "_" + weight[index];
    duplicates[key] = (duplicates[key] || 0) + 1;
  }
  const duplicateCount = Object.values(duplicates).reduce(
    (a, b) => a + b - 1,
    0
  );
  return duplicateCount;
}
