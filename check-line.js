const fs = require('fs');
const path = require('path');
const file = path.join('src', 'messages', 'en.json');
const lines = fs.readFileSync(file, 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.toLowerCase().includes('løkken')) {
    console.log(`Line ${i + 1}: ${line}`);
  }
});
