const fs = require('fs');
const path = require('path');
const logsDir = path.join(process.cwd(), 'Logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}
process.chdir(logsDir);
for (let i = 0; i < 10; i++) {
    fs.writeFileSync(`log${i}.txt`, `Am logging it lmao ${i}`);
    console.log(`log${i}.txt`);
}