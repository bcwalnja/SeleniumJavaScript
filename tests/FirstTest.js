const {Builder} = require ("selenium-webdriver");

async function firstAutomationFunction() {
    //var url = "https://lambdatest.github.io/docs/real-time-browser-testing";
    var url = "https://todo-pwa.nico.dev/preact/"

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to url
    await driver.get(url);

    // add a todo


    // close the browser
}

// run the function
firstAutomationFunction();