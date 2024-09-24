import { createContext, useReducer } from "react";

export const PostsList = createContext({
  postsList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
});

const PostsListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostsListProvider = ({ children }) => {
  const [postsList, dispatchPostsList] = useReducer(PostsListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostsList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostsList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostsList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostsList.Provider
      value={{
        postList: postsList,
        addPost: addPost,
        addInitialPost: addInitialPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostsList.Provider>
  );
};

export default PostsListProvider;
