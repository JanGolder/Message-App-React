import {useState} from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

const PostList = ({isPosting,onStopPosting}) => {

const [posts, setPosts]=useState([]);

function addPostHandler(postData){
  setPosts((prevPosts)=>[postData, ...prevPosts]);
}

console.log(posts)
  return (
    <>
    {isPosting && <Modal onClose={onStopPosting}>
        <NewPost
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>}

      <ul className={classes.posts}>
        <Post author="Ann" body="testing" />
      </ul>
    </>
  );
};

export default PostList;
