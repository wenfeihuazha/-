var length = 10;
function fn(){
  console.log(this.length)
}

var obj = {
  lenght: 5,
  method:function(fn){
    fn();
    arguments[0]();
  }
};

obj.method(fn,1)

function a(xx){
  this.x = xx;
  return this;
}

var x = a(5);
var y = a(6);
 
console.log(x.x);
console.log(y.x);