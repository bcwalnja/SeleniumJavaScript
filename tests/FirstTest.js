// JavaScript Selenium Tutorial: 

const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require ("assert")

async function firstAutomationFunction() {
    var url = "https://todo-pwa.nico.dev/preact/";
    var searchId = "title";
    let todoText = "Learn Selenium";

    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get(url);

    let search = await driver.findElement(By.id(searchId));
    await search.sendKeys("Task 1");
    await search.sendKeys(Key.RETURN);
    await search.sendKeys("Task 2");
    await search.sendKeys(Key.RETURN);
    await search.sendKeys(todoText);
    await search.sendKeys(Key.RETURN);

    // assert
    let taskList = await driver.findElements(By.css("ul > li"))
    taskList.forEach(element => {
        
        console.log(element);
        var test = element.getText();
        console.log(test);
        console.log(taskList);
    });    
    

    await driver.quit();
}

// run the function
firstAutomationFunction();