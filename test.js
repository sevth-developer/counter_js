// function aa(data) {
// console.log(data.dd)
// }
// aa({'dd':1, 'bb':2});

function outer() {
    inner();
}
function inner() { //只需改这个函数名，而不需要改内部代码
    if(arguments.callee.caller==null) {
        console.log("我是在全局环境下调用的");
    } else {
        console.log(arguments.callee.caller+"调用了我");
    }
}
inner();
outer();