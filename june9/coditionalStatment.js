let age = 20;
if (age > 18 ){
    console.log('can vote');
}
else{
    console.log('can not vote');
}



let a = -5;
if (0 <= a ){
    console.log('positive');
}
else{
    console.log('negitive');
}


// nested if else 

    let marks = 95;
    if(marks>=90){
        console.log('grade A');
    }
    else if (marks>=75 && marks<90){
        console.log('grade B');
    }
    else if (marks>=33 && marks<75){
        console.log('grade C');
    }
     else {
        console.log('fail');
    }

let x =10;
if (x % 2 === 0){
    console.log('even')
}
else{
    console.log('odd')
}


//
console.log(x % 2 === 0 ? 'even' : 'odd');


//switch case
let day =2;
switch(day){
    case 1: console.log('Monday');
            break;
            case 1: console.log('Monday');
            break;
            case 2: console.log('Tuesday');
            break;
            case 3: console.log('wedsnesday');
            break;
            case 4: console.log('thursday');
            break;
            case 5: console.log('friday');
            break;
            case 6: console.log('saturday');
            break;
            case 7: console.log('sunday');
            break;


}

let amount  =1000;
let discount;
switch(true){
    case amount>=1800: discount=amount*0.50;
    break;

    case amount>=1000: discount=amount*0.20;
    break;

    default :0;  

}
console.log("discount : ", discount)








