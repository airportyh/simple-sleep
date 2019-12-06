# Simple Sleep

A sleep function that returns a promise, for you to use
instead of `setTimeout` when you are programming in the
async/await style.

## Install

`npm install simple-sleep`

## Example

```js
const { sleep } = require("simple-sleep");

async function countDown() {
    for (var i = 10; i >= 1; i--) {
        console.log(i);
        await sleep(1000);
    }
    console.log("Lift off!");
}

countDown();
```

## `function sleep(ms: number): Promise<void>`

The `sleep` function is the sole export of this module.
It takes one parameter - the number of milliseconds to
sleep for. It returns a promise which resolves after
the sleep is over. The promise always resolves to `undefined`.