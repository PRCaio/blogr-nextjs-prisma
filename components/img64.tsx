import { stringify } from "querystring";
import React, { useState } from "react";
import styles from '../styles/Music.module.css';
import { BsHeadphones, BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { volume } from "@cloudinary/url-gen/actions/videoEdit";

function Img64() {
  const [baseImage, setBaseImage] = useState("");
  const [baseAudio, setBaseAudio] = useState("");
  const [playing, setPlaying] = useState(false);
  const [view, setView] = useState(2)
  const [name, setName] = useState('Rubens Caio')
  const [timeDown, setTimeDown] = useState(5)
  var time = 4

  const pause1 = () => {
    const audio = document.getElementById("audio")

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }

  }

  const uploadAudio = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const stringimg = `${base64}`

    console.log(stringimg)

    setBaseAudio(stringimg);


  };

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
        <input
          type="file"
          onChange={(e) => {
            uploadAudio(e);
          }}
        />
        <br></br>
        <img src={baseImage} height="200px" onClick={pause1} />
        <audio src={baseAudio} id="audio"  ></audio>
        <div className={styles.player}>
          <div className={styles.volume}>
            <input type="range" className={styles.volume1} min="0" max={25}  />
          </div>

          <div className={styles.audioplayercontainer}>

            <div className={styles.divimg}>
              <img src={baseImage} alt="" className={styles.perfil} />

            </div>
            <div className={styles.p} onClick={pause1}>
              {playing ? <BsPauseFill size={40} /> : <BsPlayFill size={40} />}
            </div>
            <p className={styles.countView}>{view}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.timeDown}>Faltam {timeDown} horas para o áudio cair.</p>

            <div className={styles.phone}><BsHeadphones size={40} /></div>

          </div>
        </div>

        

      </div>

    </>
  );
}

export default Img64;