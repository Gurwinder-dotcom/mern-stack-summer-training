const students =
{
    name: "gur",
    age: 1,
    gender: "male"
}

// accessing 
console.log(students.name);
console.log(students["name"]);

//update 
students.age = 32;
console.log(students.age);


students.city = "jal";
console.log(students.city);

delete students.age;
console.log(students.age);

for (let key in students) {
    console.log(key + "->" + students[key]);
}




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
console.log("ijdijc")

console.log(students[0])





