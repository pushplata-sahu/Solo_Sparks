"use client";
import { useState } from "react";
import "../../styles/contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    feedback: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage("Submission failed");
      }
    } catch (err) {
      console.error(" Submit error:", err);
      setMessage("Something went wrong");
    }
  };

  return (
    <>
      
      <div className="contact-container">
        <h2 className="contact-title">For contacting us, fill this form and feel free to ask anything</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          <textarea name="feedback" placeholder="Your feedback..." required onChange={handleChange} />
          <button type="submit">Submit</button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
     
    </>
  );
}
