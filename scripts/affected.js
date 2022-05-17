const execSync = require('child_process').execSync;

const target = process.argv[2];
const project = process.argv[3];
const base = process.argv[4];

function affected() {
  const affected = execSync(
    `npx nx print-affected --base=${base} --target=${target}`
  ).toString('utf-8');

  const array = JSON.parse(affected).tasks.map((t) => t.target.project);
  array.sort();

  return array.includes(project) ? project : 'break';
}

process.stdout.write(affected());
