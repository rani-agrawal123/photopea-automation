const https = require('https');
const fs = require('fs');

function downloadImage(url, path){

  return new Promise((resolve,reject)=>{

    const file = fs.createWriteStream(path);

    https.get(url,response=>{

      response.pipe(file);

      file.on('finish',()=>{
        file.close();
        resolve();
      });

    }).on('error',reject);

  });

}

module.exports = downloadImage;