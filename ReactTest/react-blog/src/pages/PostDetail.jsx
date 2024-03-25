import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        fetchImage(data.userId);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [postId]);

  const fetchImage = (userId) => {
    fetch(`https://picsum.photos/200/300?random=${userId}`)
      .then((response) => {
        setImage(response.url);
      })
      .catch((error) => console.error("Error fetching image:", error));
  };

  if (!post || !image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mt-16 flex flex-col items-center gap-6 h-screen bg-slate-200">
      <div className="relative w-full">
        <img src={image} className="w-full h-96 object-cover" alt="Post" />
        <h1 className="absolute inset-x-0 top-0 text-3xl text-white text-center bg-gray-700 bg-opacity-50 p-8">
          {post.title}
        </h1>
      </div>
      <div className="bg-white rounded h-auto w-2/3 p-8">
        <p>
          {post.body} Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>{" "}
    </div>
  );
};

export default PostDetail;
