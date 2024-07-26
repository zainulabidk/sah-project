// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./users.css"; // Ensure the path is correct

// const FetchUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(
//           "https://dummyjson.com/users?limit=100"
//         );
//         setUsers(response.data.users);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading users: {error.message}</p>;

//   return (
//     <div className="container">
//       <h1>Users List</h1>
//       <ul className="users-list">
//         {users.map((user) => (
//           <li key={user.id} className="user-item">
//             <img
//               src={user.image}
//               alt={`${user.firstName} ${user.lastName}`}
//               className="user-image"
//             />
//             <div className="user-info">
//               <p className="user-name">
//                 {user.firstName} {user.lastName}
//               </p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchUsers;
