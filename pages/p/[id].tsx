import React from "react"
import { GetServerSideProps } from "next"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/Layout"
import { PostProps } from "../../components/Post"
import prisma from '../../lib/prisma';
import Router from "next/router"
import Image from "next/image"
import styles from './../../styles/Layout.module.css'



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/');
}



const Post: React.FC<PostProps> = (props) => {
  let title = props.title
  if (!props.published) {
    title = `${title}`
  }

  return (
    <Layout>
      <div className={styles.html}>
     
        <div className={styles.html2}>
          <h2>{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          {/* <ReactMarkdown children={props.content} /> */}
          <p>Latitude: {props.latitude}</p>
          <p>Longitude: {props.longitude}</p>
          <img className="cardclientes-logo" src={props.icon} alt="" width='478px' />
          <p />
          <textarea
            cols={50}
            rows={8}
            value={props.content}
          />
          <h2>Página renderizada</h2>
        </div>
        
          <div className={styles.html1} dangerouslySetInnerHTML={{ __html: props.content }}>
          </div>
        

        <button onClick={() => deletePost(props.id)}>Delete</button>
      </div>
      
      <style jsx>{`
        .html {
          width: 20%
        }
        .page {
          background: white;
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default Post
