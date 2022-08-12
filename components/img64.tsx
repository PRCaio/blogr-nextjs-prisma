import { stringify } from "querystring";
import React, { useState } from "react";
import styles from '../styles/Music.module.css';
import { BsHeadphones, BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { volume } from "@cloudinary/url-gen/actions/videoEdit";

function Img64() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {

    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const stringimg = `${base64}`

    console.log(stringimg)

    setBaseImage(stringimg);

  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (file != null) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      }
    });
  };

  return (
    <>
      <div className="App">

        <input
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
          placeholder="Escolha"
        />
        <br></br>
        <img src={baseImage} height="200px"  />     

        

      </div>

    </>
  );
}

export default Img64;