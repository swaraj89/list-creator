function pretty(doPrint = true, string, replacer = undefined, space = 2) {
    let prettyString = JSON.stringify(string, replacer, space);

    if (doPrint) {
        console.log(prettyString)
    }

    return prettyString;
}

module.exports.pretty = pretty;