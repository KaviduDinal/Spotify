import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import ProtectedRoute from "./Auth/ProtectedRoute"
import Home from "./Components/Home"
import Landing from "./Components/Landing"

const App = () => {
  return (
    <Routes>

      {/* Landing page */}
      <Route path="/" element={<Landing />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Home with nested routes */}
      <Route
        path="/home/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App
