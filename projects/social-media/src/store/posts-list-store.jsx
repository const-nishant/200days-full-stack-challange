import { createContext, useReducer } from "react";

export const PostsList = createContext({
  postsList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostsListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostsListProvider = ({ children }) => {
  const [postsList, dispatchPostsList] = useReducer(
    PostsListReducer,
    DEFAULT_POST_LIST
  );

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
        deletePost: deletePost,
      }}
    >
      {children}
    </PostsList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Mumbai!!",
    body: "Hi Friends i am going to Mumbai",
    reactions: 2,
    userId: "user-9",
    tags: ["mumbai", "travel", "food", "culture"],
  },
  {
    id: "2",
    title: "Go to New York!!",
    body: "Hi Friends i am going to New York",
    reactions: 15,
    userId: "user-7",
    tags: ["newyork", "travel", "food", "culture"],
  },
];

export default PostsListProvider;
