import {Link} from 'react-router-dom';

import classes from './Post.module.css';

function Post({id, author,body}) {

  return (
    <ul className={classes.post}>
      <Link to={id}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>      
      </Link>
    </ul>
  );
}

export default Post;
