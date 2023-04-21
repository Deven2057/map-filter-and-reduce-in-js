//map make new array but map for each loop perform operation in same array

let arr = [1, 2, 5, 4, 35, 4]
// array filter method
let a1=arr.map((value,index) => {
  console.log (value,index)
  return value+1
})
console.log(a1)


//array filter method
let arr2= [2,4,50]
let a2=arr2.filter((value)=>{
  return value<10
})
console.log(a2)



//array reduce 
let arr3=[2,3,4,5,4]
let a3=arr3.reduce((h1, h2)=>{
  return h1+h2
})
console.log(a3)

