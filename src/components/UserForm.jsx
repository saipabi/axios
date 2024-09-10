// src/components/UserForm.js

import  { useState, useEffect } from "react";
import { createUser, updateUser } from "../services/api";

const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await updateUser(editingUser.id, formData);
    } else {
      await createUser(formData);
    }
    fetchUsers();
    setFormData({ name: "", username: "", email: "" });
    setEditingUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button type="submit">{editingUser ? "Update User" : "Add User"}</button>
    </form>
  );
};


export default UserForm;
