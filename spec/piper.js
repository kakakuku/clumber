#!/usr/bin/env node

var fs = require('fs');

var outputFile, outputStream;

if (process.argv[1] == __filename)
  outputFile = process.argv[2];

if (!outputFile) {
  throw "Must specify a filename";
}

outputStream = fs.createWriteStream(outputFile);
process.stdin.pipe(outputStream);

