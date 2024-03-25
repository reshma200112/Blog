import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BlogPost = ({ post }) => {
  return (
    <div className="bg-white w-2/3 rounded mb-4 flex flex-row justify-between ">
      <div className="w-1/3 p-3 overflow-hidden">
        <img src={post.image} className="w-full h-full transition-transform duration-300 transform-gpu hover:scale-110" alt="Post" />
      </div>
      <div className="w-2/3 flex flex-col h-full justify-center items-center gap-8">
        <h2  className="font-bold text-center w-full text-xl">{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/details/${post.id}`} className="bg-orange-500 hover:bg-orange-200 text-black rounded p-3 w-60">View More</Link>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPost;
