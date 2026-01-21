import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

// images
import {
  bg,
  artist1,
  artist2,
  artist3,
  artist4,
} from "../assets/auth/authImages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})`, filter: "none", backdropFilter: "none" }}
    >
      {/* animated singers behind the card */}
      <div className="singers-anim">
        <img src={artist1} alt="" className="singer singer-1" />
        <img src={artist2} alt="" className="singer singer-2" />
        <img src={artist3} alt="" className="singer singer-3" />
        <img src={artist4} alt="" className="singer singer-4" />
      </div>

      {/* card */}
      <div className="relative z-10 w-[440px] rounded-2xl bg-black/70 px-10 py-12 text-white">

        {/* top avatars removed to keep animated circles behind the card */}

        <h2 className="text-3xl font-bold text-center mt-8 mb-8">
          Login
        </h2>

        <div className="mb-5">
          <label className="block text-sm mb-1 text-gray-300">Email Address</label>
          <input
            type="email"
            className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 focus:outline-none focus:border-[#1DB954]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm mb-1 text-gray-300">Password</label>
          <input
            type="password"
            className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 focus:outline-none focus:border-[#1DB954]"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-[#1DB954] text-black rounded-full font-semibold text-lg hover:opacity-90 transition"
        >
          Login
        </button>

        <p
          onClick={() => navigate("/signup")}
          className="text-center mt-6 text-sm text-gray-300 cursor-pointer hover:underline"
        >
          Don’t have an account? <span className="text-white font-semibold">Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
