import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
        ZenSocial
      </h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
          Profile
        </span>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default Navbar;