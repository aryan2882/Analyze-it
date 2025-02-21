import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { motion } from "framer-motion";

const SalesOverviewChart = () => {
    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/sales_data");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Data is not in the expected format");
                }

                const formattedData = data.map((item) => ({
                    name: new Date(item.YearMonth + "-01").toLocaleString("default", { month: "short" }),
                    sales: item.TotalSales,
                }));

                setSalesData(formattedData);
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
    if (!salesData.length) return <div className="text-gray-100">No data available</div>;

    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                        data={salesData}
                        margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                        <XAxis 
                            dataKey="name" 
                            stroke="#9CA3AF"
                            label={{ 
                                value: "Months", 
                                position: "insideBottom",
                                offset: -10,
                                style: { fill: "#6366F1" }
                            }}
                            padding={{ left: 10, right: 10 }}
                            tick={{ dy: 10 }}
                        />
                        <YAxis 
                            stroke="#9CA3AF"
                            label={{ 
                                value: "Sales in lacs", 
                                angle: -90, 
                                position: "insideLeft",
                                offset: -35,
                                style: { fill: "#6366F1" }
                            }}
                            tick={{ dx: -10 }}
                            padding={{ top: 10, bottom: 10 }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#6366F1"
                            strokeWidth={3}
                            dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                        <Legend 
                            wrapperStyle={{ color: '#E5E7EB' }}
                            verticalAlign="top"
                            height={36}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesOverviewChart;