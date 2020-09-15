const fs = require('fs')
const path = require('path')
class Fs {
    /**
     * 
     * awaitWraper 
     * @des 
     * promise 返回数据处理
     */
    static awaitWraper (promise) {
        return promise.then((res) => [null, res])
        .catch((err) => [err, null])
    }

    /**
     * @dec 读文件
     * @param {} filePath
     */
    static readFn (filePath) {
        return new Promise((resolve,reject) => {
            fs.readFile(filePath, (err, data) => {
                if(err) return reject(err)
                resolve(data)
            });
        })
    }
    /**
     * @dec 写文件
     * @param {} filePath
     */
    static writeFn (filePath,data,type='utf-8') {
        return new Promise((resolve,reject) => {
            fs.writeFile(filePath,data,type ,(err, data) => {
                if(err) return reject(err)
                resolve(data)
            });
        })
    }
    /**
     * @dec 读目录
     * @param {*} dirPath 
     */
    static readDirFn (dirPath) {
        return new Promise((resolve,reject)=>{
            fs.readdir(dirPath,function(err,files){
                if(err) return reject(err);
                resolve(files)
            });
        })
    }
    /**
     * @dec 创建目录
     * @param {*} dirPath 
     */
    static mkDirFn (dirPath) {
        return new Promise((resolve,reject)=>{
            fs.mkdir(dirPath,function(err){
                if(err) return reject(err);
                resolve('ok')
            });
        })
    }

    /**
     * @dec 判断文件的状态，用于区分文件名/文件夹
     * @param {*} param 
     */
    static statFn (param) {
        return new Promise((resolve,reject)=>{
            fs.stat(param,function(err,status){
                if(err) return reject(`判断文件的状态:${err}`);
                //是文件
                // let isFile = status.isFile();
                //是文件夹
                let isDir = status.isDirectory();
                resolve(isDir?'dir':'file')
            });
        })
    }
}

module.exports = {
    Fs
}
