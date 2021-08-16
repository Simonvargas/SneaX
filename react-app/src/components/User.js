import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);

    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>First Name</strong> {user.first_name}
      </li>
      <li>
        <strong>Last Name</strong> {user.last_name}
      </li>
      <li>
        <strong>Date of Birth</strong> {user.date_of_birth}
      </li>
      <li>
        <strong>Wallet</strong> {user.wallet}
      </li>
    </ul>
  );
}
export default User;
