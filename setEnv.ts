let fs = require('fs');
let writeFile = fs.writeFile;

const targetPath = './src/environments/environment.ts';

require('dotenv').config();

const envConfigFile = `export const environment = {
   production: '${process.env['PRODUCTION']}',
   apiUrl: '${process.env['API_URL']}',
};`;

writeFile(targetPath, envConfigFile, function (err: any) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});
