let arr1 =["A","C","X"]
let arr2 =["D","E","F","Y"]
let allArray=[]

let indexOfX=arr1.indexOf("X")
let indexOfLastIndex=arr1.length+1

let indexOfF =arr2.indexOf("F")
let indexOfY=arr2.indexOf("Y")
let lastIndexInArr2 = arr2.length+1

let newArr1= arr1.slice(indexOfX,indexOfLastIndex).toString()
let newArr2= arr2.slice(indexOfF,indexOfY).toString()
let newArr3= arr2.slice(indexOfY,lastIndexInArr2).toString()
allArray.push(newArr2,newArr1,newArr3)
console.log(allArray.join("").toLowerCase());