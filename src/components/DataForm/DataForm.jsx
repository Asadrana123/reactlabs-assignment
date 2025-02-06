import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique user IDs
import { TextField, Button, Box, Typography } from "@mui/material";
import "./DataForm.css"
import { saveUserData } from "../../Redux/userSlice";
import { saveRichText } from "../../Redux/userSlice";
import { useDispatch } from "react-redux";

const DataForm = () => {
  const dispatch = useDispatch();
  // State for form fields
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (isDirty) {
      localStorage.setItem("userData", JSON.stringify(formData));
    }
  }, [formData, isDirty]);

  // Warn user before leaving if there are unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.email || !formData.phone) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    dispatch(saveUserData(formData));
    dispatch(saveRichText(""));
    localStorage.removeItem('richText'); // Corrected line
    alert("User Data Saved Successfully!");
    setIsDirty(false);
  };

  return (
    <div className="data-form">
      <Box p={3} border="1px solid #ccc" borderRadius="8px">
        <Typography variant="h5">User Data Form</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Save
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default DataForm;