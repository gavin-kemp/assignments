// https://coursework.vschool.io/multiplication-table/

let mult = function(){
    let arr = [];
    let count = 0;
    for(let i = 0; i < 10; i++){
      arr.push([]);
      count++;
      for(let j = 1; j < 11; j++ ){
        arr[i].push(j * count);
      }
    }
    return arr;
  }

  module.exports = mult;