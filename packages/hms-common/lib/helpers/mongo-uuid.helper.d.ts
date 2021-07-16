import * as mongodb from "mongodb";
declare type typeId = mongodb.Binary | string;
export declare const convertStringToBinary: (uuidString: typeId) => any;
export declare const convertBinaryToString: (uuidBinary: typeId) => any;
export {};
