import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { connect } from "react-redux";

// imports for summernote
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "react-summernote/lang/summernote-ko-KR";
import "bootstrap/js/modal";
import "bootstrap/js/dropdown";
import "bootstrap/js/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import { postNewNoticeRequest } from "store/modules/notice";

const cx = classNames.bind(styles);

class SummernoteEditor extends React.Component {
  state = {
    title: "",
    contents: ""
  };

  onChange = content => {
    this.setState({
      ...this.state,
      contents: content
    });
  };

  onImageUpload = (images, insertImage) => {
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        insertImage(reader.result);
      };

      reader.readAsDataURL(images[i]);
    }
  };

  _titleChange = event => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      title: value
    });
  };

  _onClickSubmitButton = () => {
    const { postNewNotice } = this.props;
    const { title, contents } = this.state;
    if (title === "") {
      alert("제목을 입력해주세요. ");
      return;
    }
    if (contents === "") {
      alert("내용을 입력해주세요. ");
      return;
    }
    postNewNotice(title, contents);
  };

  render() {
    const { title } = this.state;
    const { _titleChange, _onClickSubmitButton } = this;
    return (
      <div className={cx("container")}>
        <div className={cx("title-container")}>
          <input
            name={"title"}
            onChange={_titleChange}
            value={title}
            placeholder={"제목을 입력해주세요. "}
            required={true}
          />
        </div>
        <ReactSummernote
          value="내용을 입력하여주세요"
          options={{
            lang: "ko-KR",
            height: 620,
            width: 784,
            dialogsInBody: true,
            toolbar: [
              ["style", ["style"]],
              ["font", ["bold", "underline", "clear"]],
              ["fontname", ["fontname"]],
              ["para", ["ul", "ol", "paragraph"]],
              ["table", ["table"]],
              ["insert", ["link", "picture", "video"]],
              ["view", ["fullscreen", "codeview"]]
            ]
          }}
          onChange={this.onChange}
          onImageUpload={this.onImageUpload}
        />
        <div className={cx("button-container")}>
          <button onClick={_onClickSubmitButton}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    postNewNotice: (title, contents) => {
      dispatch(postNewNoticeRequest(title, contents));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummernoteEditor);
