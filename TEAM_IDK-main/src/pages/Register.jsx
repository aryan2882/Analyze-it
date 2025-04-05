// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // function Register() {
// //   const [form, setForm] = useState({ username: "", email: "", password: "", role: "" });
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await fetch("http://localhost:9000/api/users/register", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });
// //       if (response.ok) {
// //         alert("Registration Successful!");
// //         navigate("/login");
// //       } else {
// //         alert("Registration Failed");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Something went wrong");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
// //       <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleSubmit}>
// //         <h2 className="text-xl mb-4">Register</h2>
// //         <input type="text" name="username" placeholder="Username" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
// //         <input type="email" name="email" placeholder="Email" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
// //         <input type="password" name="password" placeholder="Password" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
// //         <input type="text" name="role" placeholder="Role" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
// //         <button type="submit" className="w-full bg-blue-600 p-2 rounded">Register</button>
// //         <p className="mt-2 text-sm">Already registered? <a href="/login" className="text-blue-400">Login</a></p>
// //       </form>
// //     </div>
// //   );
// // }

// function Register() {
//   const [form, setForm] = useState({ username: "", email: "", password: "", role: "" ,status:""});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:9000/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert("Registration Successful!");
//         navigate("/login");
//       } else {
//         alert(data.message || "Registration Failed");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
//       <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleSubmit}>
//         <h2 className="text-xl mb-4">Register</h2>
//         <input type="text" name="username" placeholder="Username" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//         <input type="text" name="role" placeholder="Role" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//         <input type="boolean" name="statust" placeholder="Status(true of false)" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//         <button type="submit" className="w-full bg-blue-600 p-2 rounded">Register</button>
//         <p className="mt-2 text-sm">Already registered? <a href="/login" className="text-blue-400">Login</a></p>
//       </form>
//     </div>
//   );
// }

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "", statust: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://analyze-it-yaq4.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
        navigate("/login");
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
              <h1 className="text-2xl font-bold text-center mb-4">Welcome to the Best Retailing Site</h1>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">

        <h2 className="text-xl mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
          <input type="text" name="role" placeholder="Role" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
          <input type="text" name="statust" placeholder="Status (true or false)" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded font-bold">Register</button>
        </form>
        <p className="mt-4 text-center text-sm">Already registered? <a href="/login" className="text-blue-400 hover:underline">Login</a></p>
      </div>
    </div>
  );
}

export default Register;
