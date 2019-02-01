import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class EditorTest extends React.Component {
  handleEditorChange = e => {
    console.log("Content was updated: ", e.target.getContent());
  };

  render() {
    return (
      <div className={cx("container")}>
        <Editor
          initialValue="<p>HTML IS A PROGRAMING LANGUAGE</p>"
          init={{
            plugins: "link image code,image,paste",
            toolbar:
              "undo redo | bold italic | alignleft aligncenter alignright | code | image | paste",
            paste_data_images: true,
            menubar: "insert,edit",
            height: "480",
            branding: false,
            statusbar: false
          }}
          onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default EditorTest;
