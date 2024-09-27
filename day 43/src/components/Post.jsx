import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostsList } from "../store/posts-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostsList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>

        {/* Render tags */}
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        {/* Fix rendering of reactions by accessing specific properties */}
        <div className="alert alert-success reactions" role="alert">
          Likes: {post.reactions.likes} | Dislikes: {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
