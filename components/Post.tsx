import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  icon: string;
  latitude: string;
  longitude: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div  onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <div className="post">
        <img src={post.icon} className="imgIcon" />
        </div>
        <h2>{post.title}</h2>
        <p>Latitude: {post.latitude}</p>
        <p>Longitude: {post.longitude}</p>
        <small>By {authorName}</small>
      
        

      {/* <ReactMarkdown children={post.content} /> */}
      <style jsx>{
      `
        div {
          color: inherit;
          padding: 1rem;
          overflow: hidden;
          justify-content: center;
          flex-wrap: wrap;
          
          
        }
        .imgIcon {
          height: 9rem;                
                           
                 
        }
        .post {
          float: left;  
          top: 10;
          right: 0;
          heigth: 2rem;
          width: 40%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;  
          overflow: hidden;   
          margin-right: 1rem     
            
        }
      `
      }</style>
    </div>
  );
};

export default Post;
