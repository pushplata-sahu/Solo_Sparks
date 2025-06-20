"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/login.css";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const backendURL = "http://localhost:5000";  

    try {
      const res = await fetch(`${backendURL}/api/login`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        if (formData.email) {
          localStorage.setItem("userEmail", formData.email);
        }
        alert("Login successful!");
        setTimeout(() => {
          router.push("/dashboard"); 
        }, 500); 
      } else {
        setError(data.message || "Invalid credentials");
        alert(data.message || "Invalid credentials"); 
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login Error:", err); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}
