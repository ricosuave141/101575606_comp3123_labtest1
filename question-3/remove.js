const fs = require('fs');
const path = require('path');
const logsDir = path.join(process.cwd(), 'Logs');
if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
        console.log(`deleting the files . . .${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });
    fs.rmdirSync(logsDir);
}