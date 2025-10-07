"use client";

import React, { useState } from "react";
import API from "../api";
import Image from "next/image";
import cowBg from "../public/cows.jpg";
import "./globals.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", { email, password });
      alert("✅ Logged in successfully!");
      console.log(res.data);
    } catch (err: any) {
      alert(err.response?.data?.message || "❌ Invalid email or password");
    }
  };

  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `url(${cowBg.src})`,
      }}
    >
      <div className="overlay"></div>
      <h2 className="farmfusion-title">FarmFusion Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
