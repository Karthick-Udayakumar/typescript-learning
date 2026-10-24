let annonymousFunction = function(){
    console.log("Name is Karthick")
}

/**
 * @param {string} browserName
 */
let launchBrowser = function(browserName)
{
    switch(browserName)
    {
        case 'chrome':
            console.log("launching chrome browser")
            break
        default:
            console.log("Invalid Browser")
            break
    }
}

launchBrowser('chrome')