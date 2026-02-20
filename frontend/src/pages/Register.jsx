import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2 style={{ marginBottom: "20px" }}>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/")}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;