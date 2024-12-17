import React, { useState } from "react";
import axios from "axios";
import UploadFile from "./UploadFile";
import "./StudentForm.css";

function StudentForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    internship: "",
    course: "",
    linkedin: "",
    github: "",
    skills: "",
    certificate: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // Append form data
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append file data
    if (selectedFile) {
      data.append("certificate_file", selectedFile);
    }

    try {
      await axios.post("http://localhost:8000/api/students/", data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="student-form">
      <h2>Student Information</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <div className="name-input">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            onChange={handleChange}
            required
          />
        </div>

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="example@domain.com"
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          placeholder="123-456-7890"
          onChange={handleChange}
          required
        />

        <label>Internship</label>
        <input
          type="text"
          name="internship"
          placeholder="Internship Name"
          onChange={handleChange}
        />

        <label>Course</label>
        <input
          type="text"
          name="course"
          placeholder="Courses Completed"
          onChange={handleChange}
        />

        <label>LinkedIn</label>
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn profile Link"
          onChange={handleChange}
        />

        <label>Github</label>
        <input
          type="url"
          name="github"
          placeholder="Github profile Link"
          onChange={handleChange}
        />

        <label>Skills</label>
        <input
          type="text"
          name="skills"
          placeholder="Tools, Frameworks, Programming languages Known"
          onChange={handleChange}
        />

        <label>Certificate</label>
        <select name="certificate" onChange={handleChange}>
          <option value="">Select Certificate</option>
          <option value="Certificate A">Certificate A</option>
          <option value="Certificate B">Certificate B</option>
        </select>

        <UploadFile onFileSelect={handleFileSelect} />

        <div className="buttons">
          <button type="button" className="go-back">
            Go back
          </button>
          <button type="submit" className="continue">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
