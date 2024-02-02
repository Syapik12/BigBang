const fs = require('fs');

function arrayBigBang() {
    const resultArray = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {

            resultArray.push('BIGBANG');

        } else if (i % 3 === 0) {

            resultArray.push('BIG');

        } else if (i % 5 === 0) {

            resultArray.push('BANG');

        } else {

            resultArray.push(i.toString());

        }
    }

    return resultArray;
}

const outputArray = arrayBigBang();
const outputJSON = JSON.stringify(outputArray, null, 2);

fs.writeFile('output.json', outputJSON, (err) => {
    if (err) throw err;
    console.log('success!');
});