import "./app.css";
import { useRef, useState } from "react";
//import axios from "axios";

function App() {
  const [file, setFile] = useState("");
  const FormSubmision = async (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      const fileName = file.name;
      formData.append("name", fileName);
      formData.append("file", file);
      try {
        //await axios.post("http://localhost:3003/info", formData);
        await fetch("http://localhost:3003/info", {
          method: "POST",
          body: formData,
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {file && (
        <img src={URL.createObjectURL(file)} className="img" alt="avatar" />
      )}

      <form
        className="formContainer"
        onSubmit={FormSubmision}
        // encType="multipart/form-data"
      >
        <div className="inputControl">
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
        </div>

        <button type="submit" className="btn">
          Upload
        </button>
      </form>
    </>
  );
}

export default App;
