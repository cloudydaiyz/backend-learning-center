import fs from "fs";
import { parse } from "csv-parse";
import { Readable } from "stream";

const url = "https://docs.google.com/spreadsheets/d/1Ita-QOxFBd37i-_7xxKtTOh4FghBknFY5WO9Yrqc2nE/gviz/tq?tqx=out:csv";
// const url = "https://docs.google.com/spreadsheets/d/1Ita-QOxFBd37i-_7xxKtTOh4FghBknFY5WO9Yrqc2nE/gviz/tq?tqx=out:csv";

async function fetchAndParseCSV() {
    try {
        // Fetch CSV content
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching CSV: ${response.statusText}`);
        }

        const csvData = await response.text(); // Get CSV content as a string

        // Convert the CSV string into a readable stream
        const readableStream = Readable.from(csvData);

        // Create an array to store parsed CSV rows
        const results: any[] = [];

        // Pipe the readable stream into the CSV parser
        const res = readableStream.pipe(parse({ delimiter: "," }))
            .on('data', (row: string[]) => {
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
        
    } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
    }
}

fetchAndParseCSV();