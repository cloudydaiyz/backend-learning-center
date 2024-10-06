"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const csv_parse_1 = require("csv-parse");
const stream_1 = require("stream");
const url = "https://docs.google.com/spreadsheets/d/1Ita-QOxFBd37i-_7xxKtTOh4FghBknFY5WO9Yrqc2nE/gviz/tq?tqx=out:csv";
// const url = "https://docs.google.com/spreadsheets/d/1Ita-QOxFBd37i-_7xxKtTOh4FghBknFY5WO9Yrqc2nE/gviz/tq?tqx=out:csv";
function fetchAndParseCSV() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch CSV content
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching CSV: ${response.statusText}`);
            }
            const csvData = yield response.text(); // Get CSV content as a string
            // Convert the CSV string into a readable stream
            //   const readableStream = Readable.from(csvData);
            const readableStream = stream_1.Readable.from(csvData);
            // Create an array to store parsed CSV rows
            const results = [];
            // Pipe the readable stream into the CSV parser
            const res = readableStream.pipe((0, csv_parse_1.parse)({ delimiter: "," }))
                .on('data', (row) => {
                results.push(row.map(r => r.trim())); // Push each row to the results array
                // console.log("new row:", row);
            })
                .on('end', () => {
                console.log('Parsed CSV data:', results);
                // Use results here, it's an array of objects where each object represents a row
            })
                .on('error', (error) => {
                console.log("err");
                // console.log(error);
            });
        }
        catch (error) {
            console.error('Error fetching or parsing CSV:', error);
        }
    });
}
fetchAndParseCSV();
