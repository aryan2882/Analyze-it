import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onLogout(); // Calls the logout function when the page is loaded
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">You have been logged out</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
