// import { motion } from "framer-motion";
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

// const categoryData = [
// 	{ name: "Electronics", value: 4500 },
// 	{ name: "Clothing", value: 3200 },
// 	{ name: "Home & Garden", value: 2800 },
// 	{ name: "Books", value: 2100 },
// 	{ name: "Sports & Outdoors", value: 1900 },
// ];

// const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

// const CategoryDistributionChart = () => {
// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.3 }}
// 		>
// 			<h2 className='text-lg font-medium mb-4 text-gray-100'>Category Distribution</h2>
// 			<div className='h-80'>
// 				<ResponsiveContainer width={"100%"} height={"100%"}>
// 					<PieChart>
// 						<Pie
// 							data={categoryData}
// 							cx={"50%"}
// 							cy={"50%"}
// 							labelLine={false}
// 							outerRadius={80}
// 							innerRadius={60}
// 							fill='#8884d8'
// 							dataKey='value'
// 							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
// 						>
// 							{categoryData.map((entry, index) => (
// 								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// 							))}
// 						</Pie>
// 						<Tooltip
// 							contentStyle={{
// 								backgroundColor: "rgba(31, 41, 55, 0.8)",
// 								borderColor: "#4B5563",
// 							}}
// 							itemStyle={{ color: "#E5E7EB" }}
// 						/>
// 						<Legend />
// 					</PieChart>
// 				</ResponsiveContainer>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default CategoryDistributionChart;


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const CategoryDistributionChart = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const COLORS = ["#6366F1", "#0000FF", "#EC4899", "#008000", "#808080", "#E11D48", "#22D3EE", "#FBBF24", "#14B8A6", "#7C3AED"];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/category_data");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Data is not in the expected format");
                }

                const formattedData = data.map(item => ({
                    name: item.Description,
                    value: item.Quantity
                }));

                setCategoryData(formattedData);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-gray-100">Loading...</div>;
    if (error) return <div className="text-red-400">Error: {error}</div>;
    if (!categoryData.length) return <div className="text-gray-100">No data available</div>;

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h2>
            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={50}
                            dataKey="value"
                            //label={({ name }) => name.substring(0, 15)}
                            labelLine={false} // 🔥 Removes arrows
                        >
                            {categoryData.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={COLORS[index % COLORS.length]} 
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Legend 
                            wrapperStyle={{ color: '#E5E7EB', fontSize: '12px' }}
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default CategoryDistributionChart;
