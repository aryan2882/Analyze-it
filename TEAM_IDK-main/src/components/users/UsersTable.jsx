// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Search } from "lucide-react";

// const userData = [
// 	{ id: 1, name: "Raman", email: "Ram@example.com", role: "Salesman", status: "Active" },
// 	{ id: 2, name: "Anurag", email: "Anu@example.com", role: "Distributor", status: "Active" },
// 	{ id: 3, name: "Raag", email: "Raa@example.com", role: "Salesman", status: "Inactive" },
// 	{ id: 4, name: "Aryan", email: "Ary@example.com", role: "Salesman", status: "Active" },
// 	{ id: 5, name: "Tridib", email: "Tri@example.com", role: "Salesman", status: "Active" },
// ];

// const UsersTable = () => {
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [filteredUsers, setFilteredUsers] = useState(userData);

// 	const handleSearch = (e) => {
// 		const term = e.target.value.toLowerCase();
// 		setSearchTerm(term);
// 		const filtered = userData.filter(
// 			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
// 		);
// 		setFilteredUsers(filtered);
// 	};

// 	return (
// 		<motion.div
// 			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
// 			initial={{ opacity: 0, y: 20 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ delay: 0.2 }}
// 		>
// 			<div className='flex justify-between items-center mb-6'>
// 				<h2 className='text-xl font-semibold text-gray-100'>Profile</h2>
// 				<div className='relative'>
// 					<input
// 						type='text'
// 						placeholder='Search ...'
// 						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 						value={searchTerm}
// 						onChange={handleSearch}
// 					/>
// 					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
// 				</div>
// 			</div>

// 			<div className='overflow-x-auto'>
// 				<table className='min-w-full divide-y divide-gray-700'>
// 					<thead>
// 						<tr>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Name
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Email
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Role
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Status
// 							</th>
// 							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
// 								Actions
// 							</th>
// 						</tr>
// 					</thead>

// 					<tbody className='divide-y divide-gray-700'>
// 						{filteredUsers.map((user) => (
// 							<motion.tr
// 								key={user.id}
// 								initial={{ opacity: 0 }}
// 								animate={{ opacity: 1 }}
// 								transition={{ duration: 0.3 }}
// 							>
// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<div className='flex items-center'>
// 										<div className='flex-shrink-0 h-10 w-10'>
// 											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
// 												{user.name.charAt(0)}
// 											</div>
// 										</div>
// 										<div className='ml-4'>
// 											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
// 										</div>
// 									</div>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<div className='text-sm text-gray-300'>{user.email}</div>
// 								</td>
// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
// 										{user.role}
// 									</span>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap'>
// 									<span
// 										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// 											user.status === "Active"
// 												? "bg-green-800 text-green-100"
// 												: "bg-red-800 text-red-100"
// 										}`}
// 									>
// 										{user.status}
// 									</span>
// 								</td>

// 								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
// 									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
// 									<button className='text-red-400 hover:text-red-300'>Delete</button>
// 								</td>
// 							</motion.tr>
// 						))}
// 					</tbody>
// 				</table>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default UsersTable;



import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const UsersTable = () => {
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	// Fetch latest 5 users from backend
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch("https://analyze-it-yaq4.onrender.com/api/users/latest-logins"); // Adjust API URL if needed
				const data = await response.json();
				setUsers(data);
				console.log(data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};
		fetchUsers();
	}, []);

	const filteredUsers = users.filter(
		(user) => user.username.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Users</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search ...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Username</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Role</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredUsers.map((user) => (
							<motion.tr key={user._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.username}</div>
										</div>
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-300'>{user.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>{user.role}</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
    ${String(user.statust).toLowerCase() === "true" ? "bg-green-800 text-green-100" : "bg-red-800 text-red-100"}`}>
    {String(user.statust).toLowerCase() === "true" ? "Active" : "Inactive"}
  </span>
</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>Edit</button>
									<button className='text-red-400 hover:text-red-300'>Delete</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};

export default UsersTable;
