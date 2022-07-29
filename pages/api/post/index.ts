// pages/api/post/index.ts

import prisma from '../../../lib/prisma';

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

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, icon, latitude, longitude } = req.body;

  const author = 
    {name: "rubens",
    email: "2@2"}
  
  
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      icon: icon,
      latitude: latitude,
      longitude: longitude,
      author: { connect: {email: author.email}},
    },
  });
  res.json(result);
}
