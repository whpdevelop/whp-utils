/*
 * @Author: whp
 * @Date: 2020-09-04 16:10:06
 * @LastEditTime: 2020-09-04 16:11:10
 * @FilePath: /whp-utils/index.js
 */

interface KeyValueObj {
    [key: string]: any
}

declare class Utils {
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

module.export = Utils