// import { CheckCircle, Clock, DollarSign, ShoppingBag, TrendingUp, Package, Users, Settings } from "lucide-react";
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from "../components/orders/button";
// import { Card, CardHeader, CardTitle, CardContent } from "../components/orders/card";
// import "../../src/index.css";

// const OrdersPage = () => {
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   window.location.href = 'https://v0-deloitte-nk-cnuens.vercel.app/';
//   // }, [navigate]);

//   const routeData = [
//     { destination: "New York", packages: 15, distance: "250 miles" },
//     { destination: "Los Angeles", packages: 22, distance: "400 miles" },
//     { destination: "Chicago", packages: 18, distance: "180 miles" },
//   ];

//   const bundles = [
//     { name: "Electronics Bundle", items: "Laptop, Mouse, Keyboard", discount: "15" },
//     { name: "Home Office Bundle", items: "Desk, Chair, Lamp", discount: "10" },
//     { name: "Fitness Bundle", items: "Yoga Mat, Dumbbells, Resistance Bands", discount: "20" },
//   ];

//   const transactions = [
//     { date: "2023-06-01", type: "Sale", amount: 1250.0 },
//     { date: "2023-06-02", type: "Purchase", amount: 750.0 },
//     { date: "2023-06-03", type: "Sale", amount: 2100.0 },
//   ];

//   const shortages = [
//     { item: "Laptop Chargers", shortage: 50 },
//     { item: "Wireless Mice", shortage: 30 },
//     { item: "Ergonomic Keyboards", shortage: 25 },
//     { item: "27-inch Monitors", shortage: 15 },
//   ];

//   return (
//     <div className="h-screen w-screen bg-slate-950 p-6 flex">
//       {/* Sidebar */}
//       <aside className="w-1/6 bg-slate-900 text-white p-4 min-h-screen">
//         <div className="flex flex-col gap-4">
//           <button className="flex items-center gap-2 text-white py-2">
//             <TrendingUp className="h-5 w-5 text-indigo-400" /> Overview
//           </button>
//           <button className="flex items-center gap-2 text-white py-2">
//             <ShoppingBag className="h-5 w-5 text-blue-400" /> Analytics
//           </button>
//           <button className="flex items-center gap-2 text-white py-2">
//             <DollarSign className="h-5 w-5 text-yellow-400" /> Transactions
//           </button>
//           <button className="flex items-center gap-2 text-white py-2">
//             <Users className="h-5 w-5 text-pink-400" /> Users
//           </button>
//           <button className="flex items-center gap-2 text-white py-2">
//             <Settings className="h-5 w-5 text-green-400" /> Settings
//           </button>
//         </div>
//       </aside>
      
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col px-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
//           <Button className="text-white">
//             <Clock className="mr-2 h-4 w-4" /> Add Invoice
//           </Button>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 h-full">
//           <Card className="bg-slate-900 border-slate-800 text-white h-full">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <TrendingUp className="h-5 w-5 text-indigo-400" /> Route Optimization
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-2">
//                 <div>Destination</div>
//                 <div>Packages</div>
//                 <div>Distance</div>
//               </div>
//               {routeData.map((route, index) => (
//                 <div key={index} className="grid grid-cols-3 gap-4 py-2 text-white">
//                   <div>{route.destination}</div>
//                   <div>{route.packages}</div>
//                   <div>{route.distance}</div>
//                 </div>
//               ))}
//             </CardContent>
//           </Card>

//           <Card className="bg-slate-900 border-slate-800 text-white h-full">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Package className="h-5 w-5 text-indigo-400" /> Bundle Suggestions
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {bundles.map((bundle, index) => (
//                   <div key={index} className="p-4 bg-slate-800 rounded-lg">
//                     <div className="flex justify-between items-center mb-1">
//                       <h3 className="font-medium">{bundle.name}</h3>
//                       <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
//                         Save {bundle.discount}%
//                       </span>
//                     </div>
//                     <p className="text-sm text-slate-400">{bundle.items}</p>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;




// import { 
//   CheckCircle, Clock, DollarSign, ShoppingBag, TrendingUp, 
//   Package, Users, Settings 
// } from "lucide-react";
// import { Button } from "../components/orders/button";
// import { Card, CardHeader, CardTitle, CardContent } from "../components/orders/card";
// import "../../src/index.css";
// import Header from "../components/common/Header";

// const OrdersPage = () => {
//   const routeData = [
//     { destination: "New York", packages: 15, distance: "250 miles" },
//     { destination: "Los Angeles", packages: 22, distance: "400 miles" },
//     { destination: "Chicago", packages: 18, distance: "180 miles" },
//   ];

//   const bundles = [
//     { name: "Electronics Bundle", items: "Laptop, Mouse, Keyboard", discount: "15" },
//     { name: "Home Office Bundle", items: "Desk, Chair, Lamp", discount: "10" },
//     { name: "Fitness Bundle", items: "Yoga Mat, Dumbbells, Resistance Bands", discount: "20" },
//   ];

//   const transactions = [
//     { date: "2023-06-01", type: "Sale", amount: "$1,250.00" },
//     { date: "2023-06-02", type: "Purchase", amount: "$750.00" },
//     { date: "2023-06-03", type: "Sale", amount: "$2,100.00" },
//   ];

//   const shortages = [
//     { item: "Laptop Chargers", shortage: 50 },
//     { item: "Wireless Mice", shortage: 30 },
//     { item: "Ergonomic Keyboards", shortage: 25 },
//     { item: "27-inch Monitors", shortage: 15 },
//   ];

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-indigo-1000">
//   {/* Header */}
//   <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
//     <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-2xl font-semibold text-gray-300">Transaction</h1>  
//       <a href="https://ocrinvoice-trial1.streamlit.app" target="_blank" rel="noopener noreferrer">
//   <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center">
//     <Clock className="mr-2 h-4 w-4" /> Add Invoice
//   </Button>
// </a>

//     </div>
//   </header>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9 p-8">
        
//         {/* Route Optimization */}
//         <Card className="bg-slate-900 border-slate-800 text-white">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <TrendingUp className="h-5 w-5 text-indigo-400" /> Route Optimization
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-2">
//               <div>Destination</div>
//               <div>Packages</div>
//               <div>Distance</div>
//             </div>
//             {routeData.map((route, index) => (
//               <div key={index} className="grid grid-cols-3 gap-4 py-2 text-white">
//                 <div>{route.destination}</div>
//                 <div>{route.packages}</div>
//                 <div>{route.distance}</div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Bundle Suggestions */}
//         <Card className="bg-slate-900 border-slate-800 text-white">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Package className="h-5 w-5 text-indigo-400" /> Bundle Suggestions
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {bundles.map((bundle, index) => (
//                 <div key={index} className="p-4 bg-slate-800 rounded-lg">
//                   <div className="flex justify-between items-center mb-1">
//                     <h3 className="font-medium">{bundle.name}</h3>
//                     <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
//                       Save {bundle.discount}%
//                     </span>
//                   </div>
//                   <p className="text-sm text-slate-400">{bundle.items}</p>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Transactions */}
//         <Card className="bg-slate-900 border-slate-800 text-white">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <DollarSign className="h-5 w-5 text-indigo-400" /> Transactions
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-2">
//               <div>Date</div>
//               <div>Type</div>
//               <div>Amount</div>
//             </div>
//             {transactions.map((transaction, index) => (
//               <div key={index} className="grid grid-cols-3 gap-4 py-2 text-white">
//                 <div>{transaction.date}</div>
//                 <div>{transaction.type}</div>
//                 <div>{transaction.amount}</div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         {/* Sales Shortage */}
//         <Card className="bg-slate-900 border-slate-800 text-white">
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <DollarSign className="h-5 w-5 text-indigo-400" /> Sales Shortage
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {shortages.map((shortage, index) => (
//                 <div key={index} className="flex justify-between items-center p-4 bg-slate-800 rounded-lg">
//                   <span className="font-medium">{shortage.item}</span>
//                   <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
//                     Shortage: {shortage.shortage}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//       </div>
//     </div>
//   );
// };

// export default OrdersPage;


import {
  CheckCircle, Clock, DollarSign, ShoppingBag, TrendingUp,
  Package, Users, Settings
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../components/orders/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/orders/card";
import "../../src/index.css";
import Header from "../components/common/Header";

const OrdersPage = () => {
  const [transactions, setTransactions] = useState([]);

  const routeData = [
    { destination: "New York", packages: 15, distance: "250 miles" },
    { destination: "Los Angeles", packages: 22, distance: "400 miles" },
    { destination: "Chicago", packages: 18, distance: "180 miles" },
  ];

  const bundles = [
    { name: "Electronics Bundle", items: "Laptop, Mouse, Keyboard", discount: "15" },
    { name: "Home Office Bundle", items: "Desk, Chair, Lamp", discount: "10" },
    { name: "Fitness Bundle", items: "Yoga Mat, Dumbbells, Resistance Bands", discount: "20" },
  ];

  const shortages = [
    { item: "Laptop Chargers", shortage: 50 },
    { item: "Wireless Mice", shortage: 30 },
    { item: "Ergonomic Keyboards", shortage: 25 },
    { item: "27-inch Monitors", shortage: 15 },
  ];

  // Fetch transaction data from backend
  useEffect(() => {
    fetch("http://localhost:3000/transaction_data")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error("Error fetching transactions:", err));
  }, []);

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-indigo-1000">
      {/* Header */}
      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-300">Transaction</h1>
          <a href="https://ocrinvoice-trial1.streamlit.app" target="_blank" rel="noopener noreferrer">
            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg flex items-center">
              <Clock className="mr-2 h-4 w-4" /> Add Invoice
            </Button>
          </a>
        </div>
      </header>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-9 p-8">

        {/* Route Optimization */}
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-indigo-400" /> Route Optimization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-2">
              <div>Destination</div>
              <div>Packages</div>
              <div>Distance</div>
            </div>
            {routeData.map((route, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-2 text-white">
                <div>{route.destination}</div>
                <div>{route.packages}</div>
                <div>{route.distance}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bundle Suggestions */}
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-indigo-400" /> Bundle Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {bundles.map((bundle, index) => (
                <div key={index} className="p-4 bg-slate-800 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-medium">{bundle.name}</h3>
                    <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                      Save {bundle.discount}%
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{bundle.items}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transactions (dynamic) */}
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-indigo-400" /> Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-sm text-slate-400 mb-2">
              <div>Date</div>
              <div>Payment Mode</div>
              <div>Amount</div>
            </div>
            {transactions.length === 0 ? (
              <div className="text-slate-400">Loading...</div>
            ) : (
              transactions.map((transaction, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 py-2 text-white">
                  <div>{transaction.date}</div>
                  <div>{transaction.payment_mode}</div>
                  <div>{transaction.amount}</div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Sales Shortage */}
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-indigo-400" /> Sales Shortage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {shortages.map((shortage, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-slate-800 rounded-lg">
                  <span className="font-medium">{shortage.item}</span>
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    Shortage: {shortage.shortage}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default OrdersPage;
