const fs = require('fs');
const request = require('request');
const unzipper = require('unzipper');

async function setup() {
  if (!fs.existsSync('kanji')) {
    console.log(`KanjiVG data directory not found. Downloading zip.`);
    const zipUrl = 'https://github.com/KanjiVG/kanjivg/releases/download/r20230110/kanjivg-20230110-all.zip';
    const zipPath = 'kanji.zip';
    
    const zipStream = request(zipUrl).pipe(fs.createWriteStream(zipPath));
    await new Promise((resolve, reject) => {
      zipStream.on('finish', resolve);
      zipStream.on('error', reject);
    });
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(zipPath)
        .pipe(unzipper.Extract({ path: '.' }))
        .on('close', () => {
          console.log(`Kanji extracted successfully. Deleting ${zipPath}...`);
          fs.unlink(zipPath, (err) => {
            if (err) {
              console.error(`Error deleting ${zipPath}: ${err}`);
            } else {
              console.log(`Done.`);
            }
            resolve();
          });
        })
        .on('error', reject);
    });
  } else {
    console.log(`Kanji directory already exists. Not downloading KanjiVG.`);
  }
}

setup();