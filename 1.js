var array = [7,1,5,3,6,4];

function a(arr){
  let t = 0;
  let q = 0;
  arr.forEach((item,index) => {
    let s = arr.slice(index,arr.length);
    let m = Math.max(...s)
    if(m > item){
      let max =  m - item;
      if(max > q){
        q = max;
        t = array.findIndex(v => v == m);
      }
    }
  });
  return t+1;
}
console.log(a(array))