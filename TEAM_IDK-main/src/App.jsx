// // import { useEffect } from "react";
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import Sidebar from "./components/common/Sidebar";
// // import OverviewPage from "./pages/OverviewPage";
// // import UsersPage from "./pages/UsersPage";
// // import OrdersPage from "./pages/OrdersPage";
// // import AnalyticsPage from "./pages/AnalyticsPage";
// // import SettingsPage from "./pages/SettingsPage";
// // import { Register } from "./pages/registerlogin";
// // const RedirectToOrders = () => {
// // 	useEffect(() => {
// // 	  window.location.replace("https://v0-deloitte-nk-cnuens.vercel.app/");
// // 	}, []);
  
// // 	return null;
// //   };

// // function App() {
// // 	return (
// // 		<div className='flex h-screen bg-indigo-900 text-gray-100 overflow-hidden'>
// // 			{/* BG */}
// // 			<div className='fixed inset-0 z-0'>
// // 				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 opacity-80' />
// // 				<div className='absolute inset-0 backdrop-sm' />
// // 			</div>

// // 			<Sidebar />
// // 			<Routes>
// // 				<Route path='/' element={<Register/>}/>
// // 			<Route path='/overview' element={<OverviewPage />} />
// //   <Route path='/analytics' element={<AnalyticsPage />} />
// //   <Route path='/orders' element={<RedirectToOrders />} />
// //   <Route path='/users' element={<UsersPage />} />
// //   <Route path='/settings' element={<SettingsPage />} />
// // 			</Routes>
// // 		</div>
// // 	);
// // }

// // export default App;
// import { useEffect, useState } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Sidebar from "./components/common/Sidebar";
// import OverviewPage from "./pages/OverviewPage";
// import UsersPage from "./pages/UsersPage";
// import OrdersPage from "./pages/OrdersPage";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import SettingsPage from "./pages/SettingsPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login"

// function ProtectedRoute({ children }) {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsAuthenticated(localStorage.getItem("isAuthenticated"));
//   }, []);
  
//   return (
//     <div className={`h-screen ${isAuthenticated ? "flex" : ""} bg-indigo-900 text-gray-100 overflow-hidden`}>
//       {/* Show Sidebar only if logged in */}
//       {isAuthenticated && <Sidebar />}

//       <Routes>
//         <Route path="/" element={<Navigate to="/register" />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes: Require Login */}
//         <Route path="/overview" element={isAuthenticated ? <OverviewPage /> : <Navigate to="/login" />} />
//         <Route
//           path="/analytics"
//           element={
//             <ProtectedRoute>
//               <AnalyticsPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/orders"
//           element={
//             <ProtectedRoute>
//               <OrdersPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <ProtectedRoute>
//               <UsersPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/settings"
//           element={
//             <ProtectedRoute>
//               <SettingsPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import Register  from "./pages/Register";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    navigate("/overview");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <div className={`h-screen ${isAuthenticated ? "flex" : ""} bg-indigo-900 text-gray-100 overflow-hidden`}>
      {/* Show Sidebar only if authenticated */}
      {isAuthenticated && <Sidebar onLogout={handleLogout} />}

      <Routes>
        {/* Redirect based on authentication */}
        <Route path="/" element={<Navigate to={isAuthenticated ? "/overview" : "/login"} />} />

        {/* Redirect logged-in users away from login & register */}
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/overview" /> : <Register />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/overview" /> : <Login onLogin={handleLogin} />}
        />
		<Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
        {/* Protected Routes: Require Authentication */}
        <Route path="/overview" element={isAuthenticated ? <OverviewPage /> : <Navigate to="/login" />} />
        <Route path="/analytics" element={isAuthenticated ? <AnalyticsPage /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <OrdersPage /> : <Navigate to="/login" />} />
        <Route path="/users" element={isAuthenticated ? <UsersPage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isAuthenticated ? <SettingsPage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
