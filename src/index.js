
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {return []}
  let res = matrix.reduce(function rev(acc, value, index){
    if (index % 2 === 0) {
      return [...acc, ...value]
    } else {
      return [...acc, ...value.sort((a,b) => b-a)]
    }
  },[])
  return res;
}


