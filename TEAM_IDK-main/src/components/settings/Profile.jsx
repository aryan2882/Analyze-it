import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const ChillAvatar = ({ size = 40 }) => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            width={size} 
            height={size} 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background */}
            <circle cx="50" cy="50" r="45" fill="#7dd3fc" />
            
            {/* Face */}
            <circle cx="50" cy="50" r="35" fill="#fef3c7" />
            
            {/* Sunglasses */}
            <rect x="25" y="40" width="20" height="10" rx="2" fill="#1e293b" />
            <rect x="55" y="40" width="20" height="10" rx="2" fill="#1e293b" />
            <path d="M45 45 L55 45" stroke="#1e293b" strokeWidth="2" />
            
            {/* Chill smile */}
            <path 
                d="M35 60 Q50 70 65 60" 
                stroke="#1e293b" 
                strokeWidth="2" 
                fill="none" 
            />
            
            {/* Cool hair */}
            <path 
                d="M25 35 Q50 20 75 35" 
                stroke="#334155" 
                strokeWidth="8" 
                fill="none" 
            />
        </svg>
    );
};

const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem("simren")) || {
        name: "Guest",
        email: "guest@example.com",
    };

    return (
        <SettingSection icon={User} title="Profile">
            <div className="flex flex-col sm:flex-row items-center mb-6">
                <div className="w-20 h-20 mr-4">
                    <ChillAvatar size={80} />
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                        {currentUser.username || "Guest"}
                    </h3>
                    <p className="text-gray-400">{currentUser.email}</p>
                </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
                Edit Profile
            </button>
        </SettingSection>
    );
};

export default Profile;