function camelize(strg) {
    return strg.split('-').reduce(function(result, currentStr) {
        return result + currentStr.charAt(0).toUpperCase() + currentStr.slice(1);
    }, "");
}
   console.log(camelize("background-color"));
   console.log(camelize("-webkit-transition"));
