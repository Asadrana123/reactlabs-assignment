import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { saveRichText } from "../../Redux/userSlice";
import "./TextEditor.css";

const TextEditor = () => {
  const dispatch = useDispatch();
  const storedText = useSelector((state) => state.user.richText) || "";
  const [editorText, setEditorText] = useState("");
  
  // Save data to Redux & Local Storage
  const handleChange = (value) => {
    setEditorText(value);
    dispatch(saveRichText(value));
    localStorage.setItem("richText", value);
  };

  useEffect(() => {
    const savedText = localStorage.getItem("richText");
    const userData = JSON.parse(localStorage.getItem("userData")); // Load user data

    if (savedText) {
      // If saved text exists, use it (this keeps formatting & user modifications)
      setEditorText(savedText);
    }  else if (userData) {
      // If no saved text, but user data exists, set formatted default text
      const defaultText = `
        <ul>
          <li><strong>Name:</strong> ${userData.name || ""}</li>
          <li><strong>Email:</strong> ${userData.email || ""}</li>
          <li><strong>Address:</strong> ${userData.address || ""}</li>
          <li><strong>Phone:</strong> ${userData.phone || ""}</li>
        </ul>
      `;
      setEditorText(defaultText);
      localStorage.setItem("richText", defaultText); // Save initial default text
      dispatch(saveRichText(defaultText)); // Save to Redux
    }
  }, [dispatch,storedText]);

  return (
    <div className="text-editor-container">
      <h3>Rich Text Editor</h3>
      <ReactQuill
        value={editorText}
        onChange={handleChange}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        }}
      />
    </div>
  );
};

export default TextEditor;
