const fs = require('fs');
var data = 'This is test paragraph. If you can see this phrase, it worked';

var writerStream =fs.createWriteStream('output.txt');
writerStream.write(data, 'utf-8');

writerStream.end();

writerStream.on('finish', () => {
    console.log('Finished write!!!');
});

writerStream.on('error', (err) => {
    console.log(err.stack);
});

console.log('writestream file write fished!!!');





















