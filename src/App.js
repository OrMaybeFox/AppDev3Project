import logo from './logo.svg';
import Axios from 'axios'
import './App.css';
import React, {useState} from 'react'

function App() {

  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "tester")

    Axios.post(
      "https://api.cloudinary.com/v1_1/ormaybefox/image/upload", 
      formData
      ).then((response)=>{
        console.log(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Image Object Recognition Program
        </p>
      </header>
      <input 
      type="file" 
      onChange={(event) => {
        setImageSelected(event.target.files[0]);
      }}
      />

      <button onClick={uploadImage}> Upload Image </button>
    </div>
  );
}

export default App;
