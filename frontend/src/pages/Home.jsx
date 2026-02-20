import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}

export default Home;