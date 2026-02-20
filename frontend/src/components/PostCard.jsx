function PostCard() {
  return (
    <div className="card">
      <h4>saloni_chavan</h4>
      <img
        className="post-img"
        src="https://source.unsplash.com/random/500x300"
        alt="post"
      />
      <p style={{ marginTop: "10px" }}>
        This is a sample caption for our Zen style social app 🌿
      </p>
    </div>
  );
}

export default PostCard;