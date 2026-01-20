import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate("/home")   // ✅ REDIRECT
    } catch (error) {
      alert(error.code)
    }
  }

  return (
    <div>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup
