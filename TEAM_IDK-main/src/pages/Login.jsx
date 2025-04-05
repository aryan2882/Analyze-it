import { useState } from "react";
import { useNavigate } from "react-router-dom";

// function Login() {
//     const [form, setForm] = useState({ email: "", password: "" });
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       setForm({ ...form, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await fetch("http://localhost:9000/api/users/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//           });
      
//           const data = await response.json();
//           console.log("Server Response:", data);
      
//           if (response.ok) {
//             alert("Login Successful!");
//             localStorage.setItem("sinrem",JSON.stringify(data));
      
//             navigate("/overview");
//           } else {
//             alert("Login Failed: " + data.message);
//           }
//         } catch (error) {
//           console.error("Fetch Error:", error);
//           alert("Something went wrong. Check console for details.");
//         }
//       };
      
  
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
//         <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleSubmit}>
//           <h2 className="text-xl mb-4">Login</h2>
//           <input type="email" name="email" placeholder="Email" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
//           <button type="submit" className="w-full bg-blue-600 p-2 rounded">Login</button>
//           <p className="mt-2 text-sm">Not registered? <a href="/register" className="text-blue-400">Register</a></p>
//         </form>
//       </div>
//     );
//   }


function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("https://analyze-it-yaq4.onrender.com/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
          const data = await response.json();
          if (response.ok) {
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("simren", JSON.stringify(data.user));
            alert("Login Successful!");
            navigate("/overview");
            window.location.reload(); // Ensures authentication updates instantly
          } else {
            alert(data.message || "Login Failed");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Something went wrong.");
        }
      };
      
  
    // return (
    //   <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
    //     <form className="bg-gray-800 p-6 rounded-lg" onSubmit={handleSubmit}>
    //       <h2 className="text-xl mb-4">Login</h2>
    //       <input type="email" name="email" placeholder="Email" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
    //       <input type="password" name="password" placeholder="Password" className="block w-full mb-2 p-2 bg-gray-700" onChange={handleChange} required />
    //       <button type="submit" className="w-full bg-blue-600 p-2 rounded">Login</button>
    //       <p className="mt-2 text-sm">Not registered? <a href="/register" className="text-blue-400">Register</a></p>
    //     </form>
    //   </div>
    // );
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
          <h1 className="text-2xl font-bold text-center mb-4">Just a Sign In and move to best way to analyse your retail</h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" className="w-full p-3 rounded bg-gray-700" onChange={handleChange} required />
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded font-bold">Login</button>
            </form>
            <p className="mt-4 text-center text-sm">Not registered? <a href="/register" className="text-blue-400 hover:underline">Register</a></p>
          </div>
        </div>
      );

}
export default Login;
