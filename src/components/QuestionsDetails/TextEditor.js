import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = () => {
  return (
    <div className="text-editor" >
      <CKEditor editor={ClassicEditor} data="" />
    </div>
  );
};

export default TextEditor;
