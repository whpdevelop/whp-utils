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