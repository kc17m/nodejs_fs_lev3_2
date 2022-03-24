const fs = require("fs")

if (!fs.existsSync("./myFunnyFolder")) {
    console.log("Funny Folder created")
    fs.mkdirSync("./myFunnyFolder")
}
else {
    fs.rmdir("./myFunnyFolder", () => {
        console.log("Funny Folder deleted")
    })
}


if (fs.existsSync("./assetsTxt")) {
    console.log("assetsTxt deleted")
    fs.rmdir("./assetsTxt", () => {
        console.log("assets Folder deleted")
    })
}


if (!fs.existsSync("./What")) {
    fs.mkdir("./What", (err) => {
        if (err) {
            console.log(err)
        }
        else {
            cohsole.log("folder created")
        }
    })

    fs.writeFile("./What/isThis.txt", "", (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("file created")
        }
    })
}

