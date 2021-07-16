import * as mongodb from "mongodb";

const UUID = require("mongo-uuid");
const mongoose = require("mongoose");

type typeId = mongodb.Binary | string;

export const convertStringToBinary = (uuidString: typeId) => {
  return UUID(mongoose.Types.Buffer.Binary, uuidString);
};

export const convertBinaryToString = (uuidBinary: typeId) => {
  if (typeof uuidBinary === "string") {
    return uuidBinary;
  } else {
    return UUID.stringify(uuidBinary);
  }
};
