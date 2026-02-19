import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    alert(isLogin ? "Logged in successfully!" : "Registered successfully!");

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>
          {isLogin ? "Sign in with email" : "Register for a new account"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </form>

        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "If you have an account already"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up" : " Sign in"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
