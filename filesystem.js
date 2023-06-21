const f=require('fs')
// console.log(f)
f.readFile(__dirname+"/pn.txt","utf8",(error,data)=>{
    // console.log(data)
})
// console.log('Hello Gwalior')\
// const data=f.readFileSyn(__dirname+"/pn.txt","utf8")
// console.log(data)
// console.log('hello datia')
try {
    const data=f.readFileSync(__dirname+"/pn.txt","utf8");
console.log(data);
} catch (error) {
    console.log(error);
}
console.log('hello datia')
