let csvToJson = require('convert-csv-to-json');
const fs = require('fs')

let fileInputName = __dirname + '/bonus_1.csv';
let fileOutputName = 'myOutputFile.json';
let result = {};
let json;
let earnedSum = 0;
let spendSum = 0;

async function parseCsv () {
  await csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName, fileOutputName);
  fs.readFile(fileOutputName, (err, data) => {
    json = JSON.parse(data).filter(i => i.date < '2021-04-24T30:00:00.000Z');
    json.forEach(i => earnedSum = +(i.earned) + earnedSum);
    json.forEach(i => spendSum = +(i.spend) + spendSum);
    result = {
      'Всего накоплено': earnedSum,
      'Всего потрачено': spendSum
    };
    console.log(result);
  });
}

parseCsv();