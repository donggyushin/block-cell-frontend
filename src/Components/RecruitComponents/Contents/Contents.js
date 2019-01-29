import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Molding from "Components/Molding";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <div className={cx("molding-container")}>
          <Molding />
        </div>
        <div className={cx("column-title-in-korean")}>
          <span>채용안내</span>
        </div>
        <div className={cx("column-title-in-eng")}>
          <span>Recruit</span>
        </div>
      </div>
      <div className={cx("body")}>
        <img
          alt={"contents"}
          width={"100%"}
          src={require("../../../media/images/recruit/recruitcontent.png")}
        />
      </div>
    </div>
  );
};

export default Contents;
