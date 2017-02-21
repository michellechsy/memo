import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {LogedInHeader} from './Base.jsx';

const LatestPosts = props => {
  const postPreviews = renderPostPreviews(props.posts);

  return (
      <div>
      <LogedInHeader />
      <section>
        <div className="container-left">
          <h1>Latest Posts</h1>
        </div>
        <div>
          { postPreviews }
        </div>
      </section>
      </div>
  );
};

const renderPostPreviews = posts => {
  if (posts) {
    posts.map(post => this.renderPostPreview(post));
  } else {
    renderPostLink();
  }
};

const renderPostPreview = post => (
  <article>
    <h3><a href={`/posts/${post.slug}`}>{post.title}</a></h3>
    <time pubdate><em>{post.posted}</em></time>
    <div>
      <span>{post.blurb}</span>
      <a href={`/posts/${post.slug}`}>Read more... </a>
    </div>
  </article>
);

const renderPostLink = () => (
  <article>
    <h3>
      <span>You haven't post anything yet. Click <Link to="/posts">here</Link> to post one.</span>
    </h3>
  </article>
);

// LatestPosts.propTypes = {
//   posts: React.PropTypes.object.isRequired
// };

export default LatestPosts;
