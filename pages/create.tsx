// pages/create.tsx

import React, { useState } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
import styles from './../styles/Layout.module.css'
import Img64 from '../components/img64';



const Draft: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [icon, setIcon] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const author = 'cl66gl8kv0019u4e1rjmb7rjz'
  const [img64, setImg64] = useState('')
  const [newPicture, setNewPicture] = useState('')



  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, icon, latitude, longitude, author };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (e) => {

    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const stringimg = `${base64}`

    console.log(stringimg)

    setIcon(stringimg);

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
    <Layout>
      <Img64></Img64>
      <div>
        <img src={img64} alt="" />
        <form onSubmit={submitData}>
          <h1>Cadastro de novo local</h1>

          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título do local"
            type="text"
            value={title}
          />

          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
            placeholder="Escolha"
            accept="image/*"
          />
          <div className="image">
            <img src={icon} height="200px" />
          </div>
          <textarea
            cols={50}
            onChange={(e) => setLatitude(e.target.value)}
            placeholder="Insira o valor da Latitude"
            rows={1}
            value={latitude}
          />
          <textarea
            cols={50}
            onChange={(e) => setLongitude(e.target.value)}
            placeholder="Insira o valor da Longitude"
            rows={1}
            value={longitude}
          />
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Insira seu Html aqui"
            rows={15}
            value={content}
          />

          <input disabled={!content || !title} type="submit" value="Create" />
          <a className="back" href="#" onClick={() => Router.push('/')}>
            or Cancel
          </a>
        </form>
        <div className={styles.html} >
          <div className={styles.html1} dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>

      </div>

      <style jsx>{`
        
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }

        .back {
          margin-left: 1rem;
        }
        .image{
          height: 200px
        }
      `}</style>

    </Layout>
  );
};

export default Draft;
