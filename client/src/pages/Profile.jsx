import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/profile.css";
import defaultAvatar from "../assests/Images/profileimage.jpg";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  // 1. Fetch user data
  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:3001/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data.user || res.data); // depends on your backend
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
        alert("Please login to view your profile.");
      });
  }, [token]);

  // 2. Fetch user orders (only after user is fetched)
  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/user/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data.orders);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      }
    };

    fetchOrders();
  }, [user, token]);

  if (!token) {
    return <p>Please login to view your profile.</p>;
  }

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <img src={defaultAvatar} alt="Profile" className="profile-image" />
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString()}</p>
      <p><strong>Gender:</strong> {user.gender}</p>

      <h3>My Orders</h3>
      {orders && orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <strong>Order #{order.orderNumber}</strong><br />
              Total: ₹{order.total}<br />
              Status: {order.paymentStatus}<br />
              Date: {new Date(order.createdAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}
