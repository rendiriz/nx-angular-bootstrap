const { writeFile } = require('fs');

require('dotenv').config();

const environment = process.env.ENVIRONMENT;
const isProduction = environment === 'production';

let targetPath = './apps/demo/src/environments/';
if (environment === 'staging') {
  targetPath += `environment.stag.ts`;
} else if (environment === 'production') {
  targetPath += `environment.prod.ts`;
} else {
  targetPath += `environment.ts`;
}

const fileContent = `
export const environment = {
  environment: '${environment}',
  production: ${isProduction},
};
`;

writeFile(targetPath, fileContent, (err) => {
  if (err) {
    console.error(err);
  }
  console.info(`Wrote variables to ${targetPath}`);
});
