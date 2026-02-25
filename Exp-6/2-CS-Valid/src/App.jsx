import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in)$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Email must contain @ and valid domain (.com, .in, etc.)";
    }

    // Password validation
    const password = formData.password;

    if (!/^[A-Z]/.test(password)) {
      newErrors.password =
        "Password must start with a capital letter";
    } else if (!/\d/.test(password)) {
      newErrors.password =
        "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.password =
        "Password must contain at least one special character";
    } else if (password.length < 5) {
      newErrors.password =
        "Password must be at least 5 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;