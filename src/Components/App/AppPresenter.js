import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../../Routes/Home";
import IntroContainer from "../../Routes/Intro";
import BusinessContainer from "Routes/BusinessModel";
import WayToBlockCellContainer from "Routes/WayToBlockCell";
import RecruitContainer from "Routes/Recruit";
import NoticeContainer from "Routes/Notice";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import NoticeDetailContainer from "Routes/NoticeDetail";
import FrequentlyAskedContainer from "Routes/FrequentlyAsked";
import FrequentlyAskedDetailPresenter from "Routes/FrequentlyAskedDetail";
import QuestionAndAnswer from "Routes/QuestionAndAnswer";
import QuestionAndAnswerDetail from "Routes/QuestionAndAnswerDetail";
import NoticeWriter from "Routes/NoticeWriter";
import LoginPage from "Routes/Login";
import NewAccountPage from "Routes/NewAccout";
import NoticeDetailFake1 from "Routes/NoticeDetailFake";
import NoticeDetailFake2 from "Routes/NoticeDetailFake2";
import FrequentlyAskedDetailFake1 from "Routes/FrequentlyAskedDetailFake";
import Modal from "react-responsive-modal";
import FAQwriterPageContainer from "Routes/FAQwriter";
import QNAwriterPage from "Routes/QNAwriter/presenter";
const cx = classNames.bind(styles);

const AppPresenter = ({ open, error, onCloseModal }) => {
  return (
    <Router>
      <div className={cx("container")}>
        <Route exact path={"/"} component={IntroContainer} />
        <Route exact path={"/about-us"} component={HomeContainer} />
        <Route exact path={"/business-model"} component={BusinessContainer} />
        <Route
          exact
          path={"/way-to-blockcell"}
          component={WayToBlockCellContainer}
        />
        <Route exact path={"/recruit"} component={RecruitContainer} />
        <Route exact path={"/notice"} component={NoticeContainer} />
        <Route
          exact
          path={"/notice-detail/as2"}
          component={NoticeDetailFake1}
        />
        <Route
          exact
          path={"/notice-detail/as3"}
          component={NoticeDetailFake2}
        />
        <Route
          exact
          path={"/notice-detail/:id"}
          component={NoticeDetailContainer}
        />
        <Route
          exact
          path={"/frequently-asked"}
          component={FrequentlyAskedContainer}
        />
        <Route
          exact
          path={"/frequently-asked/as1"}
          component={FrequentlyAskedDetailFake1}
        />
        <Route
          exact
          path={"/frequently-asked/:id"}
          component={FrequentlyAskedDetailPresenter}
        />
        <Route exact path={"/question&answer"} component={QuestionAndAnswer} />
        <Route
          exact
          path={"/question&answer/:id"}
          component={QuestionAndAnswerDetail}
        />
        <Route exact path={"/notice-writer"} component={NoticeWriter} />
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/new-account"} component={NewAccountPage} />
        <Route exact path={"/faq-writer"} component={FAQwriterPageContainer} />
        <Route exact path={"/qna-writer"} component={QNAwriterPage} />
        <div>
          <Modal open={open} onClose={onCloseModal} center>
            <h2>BLOCK CELL</h2>
            <p className={cx("p-in-modal")}>{error}</p>
          </Modal>
        </div>
      </div>
    </Router>
  );
};

export default AppPresenter;
