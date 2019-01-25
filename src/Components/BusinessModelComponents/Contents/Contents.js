import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Contents = () => {
  return (
    <div className={cx("contents")}>
      <div className={cx("header")}>
        <div className={cx("column")}>
          <span className={cx("header-title")}>사업모델</span>
        </div>
        <div className={cx("column")}>
          <span className={cx("header-title-eng")}>Business model</span>
        </div>
      </div>
      <div className={cx("body")}>
        <div className={cx("item")}>
          <div className={cx("item-header")}>
            <div className={cx("item-header-number")}>
              <span>1</span>
            </div>
            <div className={cx("item-header-title")}>
              <span>금융상품 및 직접투자 방식</span>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item-header")}>
            <div className={cx("item-header-number")}>
              <span>1</span>
            </div>
            <div className={cx("item-header-title")}>
              <span>금융상품 및 직접투자 방식</span>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item-header")}>
            <div className={cx("item-header-number")}>
              <span>1</span>
            </div>
            <div className={cx("item-header-title")}>
              <span>금융상품 및 직접투자 방식</span>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item-header")}>
            <div className={cx("item-header-number")}>
              <span>1</span>
            </div>
            <div className={cx("item-header-title")}>
              <span>금융상품 및 직접투자 방식</span>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item-header")}>
            <div className={cx("item-header-number")}>
              <span>1</span>
            </div>
            <div className={cx("item-header-title")}>
              <span>금융상품 및 직접투자 방식</span>
            </div>
          </div>
          <div className={cx("item-body")}>
            <div className={cx("background-image")} />
            <div className={cx("item-body-text")}>
              <div className={cx("row")}>
                <span>1) 당사 발행의 상품권 (블럭 셀)</span>
              </div>
              <div className={cx("row")}>
                <span>2) B.C.T 코인, 개발사업 보장성 코인</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
