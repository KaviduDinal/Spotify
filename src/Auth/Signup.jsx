import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

import {
  bg,
  artist1,
  artist2,
  artist3,
  artist4,
  google,
  facebook,
} from "../assets/auth/authImages";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleSignup = async () => {
    try {
      if (!fullName.trim()) {
        alert("Please enter your full name");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: fullName });
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.code);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.code);
    }
  };

  const handleFacebookSignup = async () => {
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

      <div className="relative z-10 w-[440px] rounded-2xl bg-black/70 px-10 py-12 text-white">

        {/* top avatars  removed to keep animated circles behind the card */}

        <h2 className="text-3xl font-bold text-center mt-8 mb-8">
          Sign Up
        </h2>

        <div className="mb-5">
          <label className="block text-sm mb-1 text-gray-300">Full Name</label>
          <input
            type="text"
            className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 focus:outline-none focus:border-[#1DB954]"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

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
          onClick={handleSignup}
          className="w-full py-3 bg-gradient-to-r from-[#6B1E23] to-[#2C0F12] text-white rounded-full font-semibold text-lg hover:shadow-lg transition shadow-[0_18px_26px_rgba(44,15,18,0.45)] border border-white/5"
        >
          Sign Up
        </button>

        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleSignup}
            className="w-full py-3 bg-transparent border border-gray-500 text-white rounded-full font-semibold text-base hover:border-gray-400 transition flex items-center justify-center gap-3"
          >
            <img src={google} alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button
            onClick={handleFacebookSignup}
            className="w-full py-3 bg-transparent border border-gray-500 text-white rounded-full font-semibold text-base hover:border-gray-400 transition flex items-center justify-center gap-3"
          >
            <img src={facebook} alt="Facebook" className="w-5 h-5" />
            Continue with Facebook
          </button>
        </div>

        <p
          onClick={() => navigate("/login")}
          className="text-center mt-6 text-sm text-gray-300 cursor-pointer hover:underline"
        >
          Already have an account? <span className="text-white font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
