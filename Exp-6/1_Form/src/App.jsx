import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    skills: [],
    address: "",
    state: ""
  });

  const statesList = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

  const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value]
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value)
      });
    }
  } 
  else if (name === "dob") {
  const birthDate = new Date(value);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Prevent negative age
  if (age < 0) {
    age = 0;
  }

  setFormData({
    ...formData,
    dob: value,
    age: age
  });
}
  else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
};

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(formData.dob);

    alert(
      `
       First Name: ${formData.firstName}  
       Last Name: ${formData.lastName}
       Gender: ${formData.gender}
       DOB: ${formData.dob}
       Age: ${age}
       Skills: ${formData.skills.join(", ")}
       Address: ${formData.address}
       State: ${formData.state}`
    );
  };

  

  return (
  <div className="form-container">
    <h2>Registration Form</h2>

    <form onSubmit={handleSubmit}>
      
      {/* First + Last Name Row */}
      <div className="row">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Gender */}
      <div className="form-group">
        <label>Gender</label>
        <div className="options-group">
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
          </label>
        </div>
      </div>

      {/* DOB + Age Row */}
<div className="row">
  <div className="form-group">
    <label>Date of Birth</label>
    <input
  type="date"
  name="dob"
  value={formData.dob}
  onChange={handleChange}
  max={new Date().toISOString().split("T")[0]}
  required
/>
  </div>

  <div className="form-group">
    <label>Age</label>
    <input
      type="text"
      value={formData.age}
      readOnly
      className="age-field"
      placeholder="Auto-calculated"
    />
  </div>
</div>

      {/* Skills */}
      <div className="form-group">
  <label>Skills</label>
  <div className="options-group">
    <label>
      <input type="checkbox" value="Java" onChange={handleChange} /> Java
    </label>

    <label>
      <input type="checkbox" value="Python" onChange={handleChange} /> Python
    </label>

    <label>
      <input type="checkbox" value="React" onChange={handleChange} /> React
    </label>

    <label>
      <input type="checkbox" value="C++" onChange={handleChange} /> C++
    </label>

    <label>
      <input type="checkbox" value="Machine Learning" onChange={handleChange} /> Machine Learning
    </label>

    <label>
      <input type="checkbox" value="Artificial Intelligence" onChange={handleChange} /> Artificial Intelligence
    </label>
  </div>
  </div>

      {/* Address */}
      <div className="form-group">
        <label>Address</label>
        <textarea
          rows="3"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* State */}
      <div className="form-group">
        <label>State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          {statesList.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default App;