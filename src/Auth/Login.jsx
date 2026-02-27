import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

// images
import {
  bg,
  artist1,
  artist2,
  artist3,
  artist4,
  google,
  facebook,
} from "../assets/auth/authImages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.code);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.code);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
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
          className="w-full py-3 bg-gradient-to-r from-[#0B3037] to-[#134E5E] text-white rounded-full font-semibold text-lg hover:opacity-95 transition shadow-[0_18px_26px_rgba(19,78,94,0.35)] border border-white/6"
        >
          Login
        </button>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-transparent border border-gray-500 text-white rounded-full font-semibold text-base hover:border-gray-400 transition flex items-center justify-center gap-3"
          >
            <img src={google} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button
            onClick={handleFacebookLogin}
            className="w-full py-3 bg-transparent border border-gray-500 text-white rounded-full font-semibold text-base hover:border-gray-400 transition flex items-center justify-center gap-3"
          >
            <img src={facebook} alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
        </div>

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
