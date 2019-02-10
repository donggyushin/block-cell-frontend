import { combineReducers } from "redux";
import test from "./test";
import user from "./user";
import notice from "./notice";
import faq from "./faq";
import qna from "./qna";
import commentForNotice from "./commentForNotice";
import commentForFaq from "./commentForFaq";
import commentForQna from "./commentForQna";

export default combineReducers({
  test,
  user,
  notice,
  faq,
  qna,
  commentForNotice,
  commentForFaq,
  commentForQna
});
