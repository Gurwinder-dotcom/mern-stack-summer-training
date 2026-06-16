let numbers =[5,56,7,2,8,20,12,7,8,4];

//map 
let sqr =numbers.map((sqr)=> sqr*sqr);
console.log(sqr);

//filter
let even = numbers.filter((e)=> e%2==0);
console.log(even);


let employ = [
    {
        id: 9,
        name: "guri",
        gender: "male"
    },

    {
        id: 1,
        name: "jasi",
        gender: "male"
    }

]
let arr = employ.find((i)=> i.id==1 );

console.log(arr);



console.log(numbers.slice(1,3));
numbers.splice(1,3);
console.log(numbers);
