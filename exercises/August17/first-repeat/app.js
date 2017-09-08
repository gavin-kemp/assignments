// https://coursework.vschool.io/first-repeat/

let firstRepeat = function (str) {

    let tempArr = [];

    for (let i = 1; i < str.length; i++) {
        //check which iteration we're on
        if (i !== 1) {
            //we're not on the first iteration
            if (str[i] !== str[i - 1]) {
                return str[i];
            }

        } else {

            if (str[i] !== str[i - 1]) {
                return str[i - 1]
            }
        }
    }
    throw "contains all repeats";
}



module.exports = firstRepeat;