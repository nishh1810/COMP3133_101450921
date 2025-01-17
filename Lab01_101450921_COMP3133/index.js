const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

//Delete existing files if they exist
[canadaFile, usaFile].forEach((file) => {
    if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        console.log(`${file} deleted.`);
    }
});

// Create writable streams for output files
const canadaStream = fs.createWriteStream(canadaFile);
const usaStream = fs.createWriteStream(usaFile);

// Write headers to the output files
canadaStream.write('country,year,population\n');
usaStream.write('country,year,population\n');

//Reading and filtering data
fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
        if (row.country.toLowerCase() === 'canada') {
            canadaStream.write(`${row.country},${row.year},${row.population}\n`);
        } else if (row.country.toLowerCase() === 'united states') {
            usaStream.write(`${row.country},${row.year},${row.population}\n`);
        }
    })
    //whether processing is done or erroe occured
    .on('end', () => {
        console.log('Data processing completed.');
        canadaStream.end();
        usaStream.end();
    })
    .on('error', (err) => {
        console.error('Error reading the file:', err);
    });
