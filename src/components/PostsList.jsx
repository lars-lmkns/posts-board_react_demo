import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="John" body="First post" />
      <Post author="Jane" body="Second post" />
      <Post author="Jim" body="Third post" />
    </ul>
  );
}

export default PostsList;