import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./Auth/Login"
import Signup from "./Auth/Signup"
import ProtectedRoute from "./Auth/ProtectedRoute"
import Home from "./Components/Home"

const App = () => {
  return (
    <Routes>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/home" />} />

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
