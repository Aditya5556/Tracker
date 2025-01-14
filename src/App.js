import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase"; // Firebase setup file
import Header from "./components/Header"; // Navigation Header
import HomePage from "./pages/HomePage"; // Home page for logged-in users
import AuthForm from "./components/AuthForm"; // Unified Authentication form
import AnimatedHeader from "./components/AnimatedHeader";
import AnimatedCard from "./components/AnimatedCard";
import ScrollSection from "./components/ScrollSection";
import HoverEffect from "./components/HoverEffect";
import "./App.css"; // Styling

const App = () => {
  const [user, setUser] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  // Google Sign-In function
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful.");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <Router>
      {user ? (
        <div>
          {/* Header and Logout Button for authenticated users */}
          <Header />
          <button onClick={logOut} style={{ float: "right", margin: "10px" }}>
            Logout
          </button>
          {/* Routes for authenticated users */}
          <Routes>
            <Route path="/" element={<HomePage user={user} />} />
          </Routes>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f7f7f7",
          }}
        >
          <h1>Welcome to Habit Tracker!</h1>
          <AuthForm handleGoogleSignIn={handleGoogleSignIn} />
        </div>
      )}
    </Router>
  );
};

export default App;
