const XLSX = require('xlsx');
const mongoose = require('mongoose');
const Cabinet = require('../../models/Cabinet');
const path = require('path');
const mongo = require('../mongo');

async function bootstrap() {
  await mongo.connect()

  const workbook = XLSX.readFile(path.resolve(__dirname, 'sample_cabinet_list.xlsx'));
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log('jsonData:', jsonData);
  Cabinet.insertMany(jsonData)
  .then(() => console.log('Data added successfully!'))
  .catch((error) => console.error('Error adding data:', error));
}

bootstrap()