let csvToJson = require('convert-csv-to-json');

let fileInputName = __dirname + '/bonus_1.csv';
let result;
let json;
let earnedSum = 0;
let spendSum = 0;

function parseCsv () {
  json = csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
}

function generateResult () {
  json = json.filter(i => i.date < '2021-04-24T30:00:00.000Z');
  json.forEach(i => earnedSum = +(i.earned) + earnedSum);
  json.forEach(i => spendSum = +(i.spend) + spendSum);
  result = {
    'Всего накоплено': earnedSum,
    'Всего потрачено': spendSum
  };
}

parseCsv();
generateResult();

console.log(result);