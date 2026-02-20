import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card">
          <h2>Saloni</h2>
          <p style={{ color: "gray", margin: "10px 0" }}>
            Frontend Developer 🚀
          </p>

          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <strong>10</strong>
              <p>Posts</p>
            </div>
            <div>
              <strong>120</strong>
              <p>Followers</p>
            </div>
            <div>
              <strong>80</strong>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;