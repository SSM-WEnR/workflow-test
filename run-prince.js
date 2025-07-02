const Prince = require("prince")
const util   = require("util")

Prince()
    .inputs("./test.html")
    .output("./test.pdf")
    .execute()
    .then(function () {
        console.log("OK: done")
    }, function (error) {
        console.log("ERROR: ", util.inspect(error))
    })
