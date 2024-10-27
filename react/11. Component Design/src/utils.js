function sum(arr){
    let result = 0;
    arr.forEach((element) => {
        result+=element
    });
    return result
}
function dieThrow(){
    return Math.floor(Math.random()*6)+1
}
function lessThan(arr, target){
    return sum(arr)<target
}
function allSame(arr){
    return arr.every((value)=>(value===arr[0]))
}
function equalTo(arr, target){
    return sum(arr)===target
}
export {sum,dieThrow,lessThan,allSame,equalTo}