
const path = require('path')

console.log(path.resolve(__dirname,'./index.js'))
module.exports = {
    // mode:'production',
    mode:'development',
    entry:path.resolve(__dirname,'./index.js'),
    output: {
        path: path.resolve(__dirname + "/dist"),
        filename: './index.min.js'
    },
    // 指定loader
    module: {

        // rules中的每一项是一个规则
        rules:[
            {
                test: /\.js$/, // 值一个正则，符合这些正则的资源会用一个loade来处理
                use: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    }
}