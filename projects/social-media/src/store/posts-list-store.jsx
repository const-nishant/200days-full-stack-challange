import { createContext, useReducer } from "react";

const PostsList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostsListReducer = (currPostList, action) => {
  return currPostList;
};

const PostsListProvider = ({ children }) => {
  const [postsList, dispatchPostsList] = useReducer(PostsListReducer, []);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostsList.Provider
      value={{
        postList: postsList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostsList.Provider>
  );
};

export default PostsListProvider;
