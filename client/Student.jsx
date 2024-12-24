import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Student() {
  const [formData, setFormData] = useState({});
  const [students, setStudents] = useState([]);
  // // Handle input changes
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/students")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data);
      })
      .catch((error) => console.error("Error fetching items:", error));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();//not to refresh
    try {
      const response = await axios.post(
        "http://localhost:4000/api/students",
        formData
      );
      setStudents([...students, response.data]); // Add new item to the list
      setFormData({ name: "", mark1: 0, mark2: 0, mark3: 0 }); // Reset form
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handlechange}
        ></input>
        <label>Mark 1</label>
        <input
          name="mark1"
          type="number"
          value={formData.mark1}
          onChange={handlechange}
        ></input>
        <label>Mark 2</label>
        <input
          name="mark2"
          value={formData.mark2}
          type="number"
          onChange={handlechange}
        ></input>
        <label>Mark 3</label>
        <input
          name="mark3"
          value={formData.mark3}
          type="number"
          onChange={handlechange}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>

      <table className="table">
        <thead>
          <th>SL NO</th>
          <th>Student Name</th>
          <th>Student Mark1</th>
          <th>Student Mark1</th>
          <th>Student Mark1</th>
          <th>Total</th>
        </thead>

        {students.map((student, index) => (
          <tr key={student._id}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.mark1}</td>
            <td>{student.mark2}</td>
            <td>{student.mark3}</td>
            <td>{student.mark1 + student.mark2 + student.mark3}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Student;
