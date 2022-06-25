//map//

// Array.prototype.customMap = function(callback){
//   const arr = []
//   for(let i=0;i<this.length;i++){
//     arr.push(callback(this[i],i,this))
//   }
//   return arr
// }
// const inputArray = [1,2,3,4,5]
// const mapArray = inputArray.customMap((item,index,array)=>item*2)
// console.log(mapArray)

//foreach//

// Array.prototype.customForEach = function(callback){
//   for(let i=0;i<this.length;i++){
//     callback(this[i],i,this)
//   }
// }
// const arr = [1,2,3,4,5]
// arr.customForEach(i=>console.log(i))

//filter//

// const inputArray = [1,2,3,4,5]
// Array.prototype.customFilter = function(callback){
//   const arr = []
//   for(let i=0;i<this.length;i++){
//     if(callback(this[i])){
//       arr.push(this[i])
//     }
//   }
//   return arr
// }
// const filteredArray = inputArray.customFilter(i=>i==2)
// console.log(filteredArray)

//reduce//

// const inputArray = ['hi','hello']
// const reduceArray = inputArray.reduce((acc,cur)=>acc+cur)
// console.log(reduceArray)

// Array.prototype.customReduce = function(callback,initialValue){
// let accumlator = initialValue
// for(let i=0;i<this.length;i++){
// if(accumlator!==undefined)
//   accumlator = callback.call(undefined,accumlator,this[i])
// else
//   accumlator=this[i]
// }
// return accumlator
// }
// const cRArray = inputArray.customReduce((acc,cur)=>acc+cur)
// console.log(cRArray)
