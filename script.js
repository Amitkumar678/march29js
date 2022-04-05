// const obj={
//     name:'abc',
//     age:22,
//     course:'mern',
//     info:function (){
//         console.log('MY NAME IS'+this.name + "MY AGE IS"+this.age);
//     }
// }
// obj.info()
// console.log(obj);
// console.log(obj['info()']);


//object constructor
// const obj=new Object()
// obj.name='xyz'
// obj.age=22
// obj.course="mern"
// console.log(obj);

// const object=Object.keys(obj)
// console.log(object);

//spread oprator

const nam={
    name:'amiit',
    age:22,
    id:'34db'
}
// const nam1={
//     name:'abhishek',
//     age:23
// }
// const sum={...nam,...nam1}
// console.log(sum);


// const arr=[1,2,3,4,5,6,8]
// console.log(...arr);


//object .create
// const obj=Object.create(nam)
// obj.course='btech'
// console.log(obj);


//function constructor

function Person (name,course){
this.name=name,
this.age=course
}
const result=new Person('amit','btech')
const result1=new Person('abhiishek','medical')
console.log(result);
console.log(result1);