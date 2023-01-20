const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require ("assert")


async function firstAutomationFunction() {
    //var url = "https://lambdatest.github.io/docs/real-time-browser-testing";
    var url = "https://todo-pwa.nico.dev/preact/";
    var searchId = "title";
    let todoText = "Learn Selenium";

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);

    let search = await driver.findElement(By.id(searchId));
    await search.sendKeys(todoText);
    await search.sendKeys(Key.RETURN);

    // assert
    

    await driver.quit();
}

// run the function
for (let index = 0; index < 10; index++) {
    firstAutomationFunction();
}

<ul class="w-11/12 max-w-lg mx-auto my-16 border-gray-300 border-b"><li class="flex w-full border-gray-300 border-t p-4 items-center text-sm hover:bg-white c-list-item"><input type="checkbox" class="mr-4 focus:shadow-outline focus:outline-none cursor-pointer " title="mark as done"><span class=" mr-4 inline-block">Task 3</span></li><li class="flex w-full border-gray-300 border-t p-4 items-center text-sm hover:bg-white c-list-item"><input type="checkbox" class="mr-4 focus:shadow-outline focus:outline-none cursor-pointer " title="mark as done"><span class=" mr-4 inline-block">Task 2</span></li><li class="flex w-full border-gray-300 border-t p-4 items-center text-sm hover:bg-white c-list-item"><input type="checkbox" class="mr-4 focus:shadow-outline focus:outline-none cursor-pointer " title="mark as done"><span class=" mr-4 inline-block">Task 1</span></li><li class="flex w-full border-gray-300 border-t p-4 items-center text-sm hover:bg-white c-list-item"><input type="checkbox" class="mr-4 focus:shadow-outline focus:outline-none cursor-pointer " title="mark as done"><span class=" mr-4 inline-block">Learn Selenium</span></li></ul>