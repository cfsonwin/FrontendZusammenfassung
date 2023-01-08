// let p1 = Promise.resolve("1")
// console.log(p1)
// let p2 = Promise.reject("521")
// console.log(p2)
// let p3 = Promise.reject(new Promise((res, rej)=>{
//     res("ok")
// }))
// console.log(p3)
let p1 = new Promise((res, rej)=>{
    // res("ok")
    rej("error")
})

let p2 = p1.then(data => {
    // throw "fuck"
    console.log(data)
    return "res"
}, reason => {
    console.log(reason)
    return "rej"
})
console.log(p2)
// let p = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res("ok")
//     }, 1000)
// })

// p.then(value =>{
//     console.log("first: " + value)
//     return new Promise((res, rej)=>{
//         rej("error occurred")
//     })
// }).then(value => {
//     console.log("second: " + value)
// }, reason =>{
//     console.log("second: " + reason)
// }).then(value => {
//     console.log("third: " + value)
// }).catch(reason => {
//     console.log("last" + reason)
// })
// let p = new Promise((res, rej)=>{
//     // res("ok")
//     // rej("err")
//     // throw "err occurred"
//     setTimeout(()=>{
//         res("ok")
//     }, 1000)
// })
// console.log(p)
// p.then(value=>{
//     console.log(value)
// }, reason=>{
//     console.log(reason)
// })
// p.then(value=>{
//     console.log(value + "1")
// }, reason=>{
//     console.log(reason)
// })