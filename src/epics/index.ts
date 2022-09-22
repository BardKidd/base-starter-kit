import { combineEpics } from "redux-observable";

/**
 * 引入 Action 後就使用解構的方式填入 combineEpics 內。
 */
const rootEpic = combineEpics();

export default rootEpic;
