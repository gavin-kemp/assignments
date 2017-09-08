// https://coursework.vschool.io/check-data-types/
// https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array




//MAKE UNIT TEST TOO




let multiD = [[123], ["1", "2", "3"], [true, true, true]];
let multiD2 = [[true, false, true],[false, false, true]];

function checkType(arr) {
    let type = typeof arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {

            if (typeof arr[i][k] !== type) {
                return false;
            }
        }
    }
    return true;
}

checkType(multiD);
checkType(multiD2);

console.log(checkType(multiD));
console.log(checkType(multiD2));

function newCheckType(arr) {
    
    
        for (let i = 0; i < arr.length; i++) {
            let type = typeof arr[i][0];
            for (let k = 0; k < arr[i].length; k++) {
    
                if (typeof arr[i][k] !== type) {
                    return false;
                }
            }
        }
        return true;
}

console.log(newCheckType(multiD));
console.log(newCheckType(multiD2));