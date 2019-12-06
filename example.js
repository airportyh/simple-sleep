const { sleep } = require("./sleep");

async function countDown() {
    for (var i = 10; i >= 1; i--) {
        console.log(i);
        await sleep(1000);
    }
    console.log("Lift off!");
}

countDown();