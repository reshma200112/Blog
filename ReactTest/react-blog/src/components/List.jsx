import { useEffect } from "react";
import { useState } from "react";
import BlogPost from "./BlogPost";

const List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      const postsWithImages = await Promise.all(
        data.map(async (post) => {
          const imageResponse = await fetch(
            `https://picsum.photos/200/300?random=${post.id}`
          );
          const imageUrl = imageResponse.url;
          return { ...post, image: imageUrl };
        })
      );
      setPosts(postsWithImages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div id="blog-posts" className="max-w-full mt-16 pt-6">
      {posts.map((post) => (
        <div key={post.id} className="w-full justify-center flex">
          <BlogPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default List;
