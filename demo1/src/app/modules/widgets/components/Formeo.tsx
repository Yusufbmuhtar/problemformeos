import React, { createRef, useEffect, RefObject, useState } from "react";
import axios from "axios";
import "formeo/dist/formeo.min.css";

const { FormeoEditor, FormeoRenderer } = require("formeo");

export const FormEditor: React.FC = () => {
  const editorRef: RefObject<HTMLDivElement> = createRef();
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (editorRef.current) {
      const formToEdit = localStorage.getItem("selectedForm");
      let formeoOptions: { editorContainer: HTMLDivElement; formData?: any } = {
        editorContainer: editorRef.current,
      };

      if (formToEdit) {
        const parsedForm = JSON.parse(formToEdit);
        parsedForm.formName && setFormName(parsedForm.formName);
        parsedForm.formDescription && setFormDescription(parsedForm.formDescription);
        if (parsedForm.formData) {
          try {
            const parsedFormData = JSON.parse(parsedForm.formData);
            formeoOptions.formData = parsedFormData;
            console.log("Parsed form data:", parsedFormData);
          } catch (e) {
            console.error("Failed to parse form data", e);
          }
        }
      }
      const formeoInstance = new FormeoEditor(formeoOptions);

      console.log("Formeo instance:", formeoInstance);

      const handleFormeoSaved = (event: CustomEvent) => {
        console.log("Form name:", formName);
        console.log("Form description:", formDescription);
        console.log("Form data:", event.detail.formData);

        axios.post("http://localhost:9000/api/forms", { formName, formDescription, formData: event.detail.formData })
          .then(response => {
            console.log("API response:", response);
          })
          .catch(error => {
            console.error("API error:", error);
          });
      };

      document.addEventListener("formeoSaved", handleFormeoSaved as EventListener, false);

      return () => {
        document.removeEventListener("formeoSaved", handleFormeoSaved as EventListener, false);
      };
    }
  }, [editorRef, formName, formDescription]);

  return (
    <div>
      <label>
        Form Name:
        <input className="card-xl-stretch mb-xl-8" type="text" value={formName} onChange={(e) => setFormName(e.target.value)} />
      </label>
      <br />
      <label>
        Form Description:
        <textarea className="card-xl-stretch mb-xl-8" value={formDescription} onChange={(e) => setFormDescription(e.target.value)} />
      </label>
      <div ref={editorRef} />
    </div>
  );
};

export const FormRenderer: React.FC = () => {
  const rendererRef: RefObject<HTMLDivElement> = createRef();

  useEffect(() => {
    if (rendererRef.current) {
      const renderer = new FormeoRenderer({
        renderContainer: rendererRef.current,
      });
      const handleUpdate = ({ detail: { formData } }: CustomEvent) =>
        renderer.render(formData);
      document.addEventListener("formeoSaved", handleUpdate as EventListener, false);
      console.log(renderer.formData);
    }
  }, [rendererRef.current]); 

  return <div ref={rendererRef} />;
};

export default { FormEditor, FormRenderer };
