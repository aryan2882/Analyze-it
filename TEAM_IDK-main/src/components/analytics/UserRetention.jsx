import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const UserRetention = () => {
    return (
        <div>
            

            

            {/* User Retention Chart - Moved inside the main div */}
            <motion.div
                className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mt-8' // Added margin-top
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h2 className='text-xl font-semibold text-gray-100 mb-4'>Stock Requirement</h2>
                <div style={{ width: "100%", height: 300 }}>
					
                    <ResponsiveContainer width="100%" height="100%"> {/* Added width and height */}
					<table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Product Name</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Category</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Stock Required</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Month</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Smartphone</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Electronics</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>50</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>January</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Laptop</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Electronics</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>30</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>January</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Refrigerator</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Home Appliances</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>20</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>February</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Washing Machine</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Home Appliances</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>15</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>February</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Sofa</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Furniture</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>10</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>March</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Dining Table</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>Furniture</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>25</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>March</td>
                    </tr>
                </tbody>
            </table>
                    </ResponsiveContainer>
                </div>
            </motion.div>
        </div>
    );
};

export default UserRetention;