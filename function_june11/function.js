function greet(){
    console.log("good morning");
}

console.log('hi');
console.log('satshrikal');
greet();//funtion calling


// funtion with parameter
function add(a,b){
    console.log(a+b);
}

add(5,6);


function isEven(num){
    if(num%2 === 0){
        console.log("even");
    }
    else{
        console.log('odd');
    }
}
isEven(8);

// funtion with parameter and return
function sub(a,b){
    return a-b;
}
console.log(sub(5,2));


