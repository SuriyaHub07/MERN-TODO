import * as mogoDal from "../DAL/mogoDal.js"
import appConfig from "../config.js/config.js";

const selectDal = mogoDal;

export const {findUserByName,registerUser,addTask} =selectDal;