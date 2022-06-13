function findMatching(driver,driver7){
    const result = driver.filter(passeddDriver=> passeddDriver.toUpperCase() === driver7.toUpperCase());
    if(result){
        return result
    }
}

function fuzzyMatch(driver, driver7){
    const result = driver.filter(passeddDriver=>passeddDriver.toLowerCase().indexof(driver7.toLowerCase())===0)
    if(result){
        return result
    }
}
function matchName(driver, driver7){
    const result = driver.filter(passeddDriver=> passeddDriver.name === driver7);
    if(result){
        return result
    }
}