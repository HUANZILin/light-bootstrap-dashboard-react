import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const EditorComponent = (props) => {
  return (
    <div style={{ border: "1px solid #888888", height: "600px" }}>
      <Editor toolbar={props.toolBar} />
    </div>
  );
};
