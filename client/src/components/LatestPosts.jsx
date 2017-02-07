const LatestPosts = props => {
    const postPreviews = renderPostPreviews(props.posts);

    return (
      <section>
        <div><h1>Latest Posts</h1></div>
        <div>
          { postPreviews }
        </div>
      </section>
    );
};

const renderPostPreviews = posts => (
    posts.map(post => this.renderPostPreview(post))
);

const renderPostPreview = post => (
      <article>
        <h3><a href={`/post/${post.slug}`}>{post.title}</a></h3>
        <time pubdate><em>{post.posted}</em></time>
        <div>
          <span>{post.blurb}</span>
          <a href={`/post/${post.slug}`}>Read more... </a>
        </div>
      </article>
);

LatestPosts.propTypes = {
  posts: React.PropTypes.object.isRequired
};
