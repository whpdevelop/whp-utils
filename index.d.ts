/*
 * @Author: whp
 * @Date: 2020-09-04 16:10:06
 * @LastEditTime: 2020-09-04 16:11:10
 * @FilePath: /whp-utils/index.js
 */

interface KeyValueObj {
    [key: string]: any
}

export declare class Utils {
    /**
     * @des 本地存储操作
     * @param key 
     * @param value 
     */
    static getItemL(key:string):any
    static setItemL(key:string,value:any):any
    static removeItemL(key:string):any
    static getItemS(key:string):any
    static setItemS(key:string,value:any):any
    static removeItemS(key:string):any
    
    static objToQueryStr(obj:objToQueryStr):string
    static getUrlParams(name:string):any
    static aLink(hash:string):void
    static arrOUniqueFn(arr:object[],u_key:string)
    static toFixed2(value:string,num:number,type:string):string
    static ceil2(value:string,type:string):string
    static ceil24(value:string,type:string):string
    static toPercentage(hash:string):string
    static randomNum(minNum:number,maxNum:number):number
}

export declare class Fs {
    /**
     * @des 处理 await promise 返回值
     * @param promise 
     * void [null,res]
     * void [err,null]
     */
    static awaitWraper(promise:Promise):any[]
    /**
     * @dec 读文件
     * @param {} filePath
     */
    static readFn(filePath:string):string
    /**
     * @dec 写文件
     * @param {} filePath
     */
    static writeFn(filePath:string,data:any,type:string):Promise
    /**
     * @dec 读目录
     * @param {} dirPath
     */
    static readDirFn(dirPath:string):Promise
    /**
     * @dec 创建目录
     * @param {} dirPath
     */
    static mkDirFn(dirPath:string):Promise
    /**
     * @dec 判断文件的状态，用于区分文件名/文件夹
     * @param {} dirPath
     * @void difr | file 
     */
    static mkDirFn(param:string):string
}
