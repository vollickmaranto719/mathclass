const fs = require('fs');
const readline = require('readline');

function writeToFile(data) {
    const file = 'problems.json';
    try {
        fs.writeFileSync(file, JSON.stringify(data, null, '\t'));
        console.log(`Successfully wrote ${data} to '${file}'.`);
    } catch (err) {
        console.error(err);
    }
}

async function readFromFile() {
    try {
        if (!fs.existsSync('problems.json')) return undefined;
        const file = 'problems.json';
        const data = await fs.readFileSync(file, { encoding: 'utf8' });
        writeToFile(data);
        console.log(`Successfully read '${file}'.`);
    } catch (err) {
        console.error(err);
    }
}

readFromFile();
