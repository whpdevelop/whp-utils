const path = require('path')
const  { Fs, Utils }   = require('./index')
// const { awaitWraper, readFn } = Fs
// ;(async ()=>{
//     let [err,res] = await Fs.awaitWraper(Fs.readFn(path.resolve(__dirname,'package.json')))
//     console.log(err)
//     console.log(res.toString())
// })()
console.log(Utils.getUrlParams())