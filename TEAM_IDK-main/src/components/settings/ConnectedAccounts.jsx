import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "STATE BANK OF INDIA",
			connected: true,
			icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/State-Bank-of-India-Logo.svg/2048px-State-Bank-of-India-Logo.svg.png",
		},
		
		{
			id: 2,
			name: "GRAMIN BANK OF INDIA",
			connected: false,
			 icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlOby8saP1CYY_NNV8LIJZf2Yn0kME6YnLA&s",
		},
		{
			id: 3,
			name: "Citi BANK ",
			connected: true,
			icon: "https://play-lh.googleusercontent.com/n0Dg1rcDZnVzYljS1y867-BJd4wMnrId3UcQh0o_s6M_LjR_hsJZbctLpDKfWq7jtw=w416-h235-rw",
		},
	]);
	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className='flex items-center justify-between py-3'>
					<div className='flex gap-1'>
						<img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
						<span className='text-gray-300'>{account.name}</span>
					</div>
					<button
						className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button className='mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200'>
				<Plus size={18} className='mr-2' /> Add Account
			</button>
		</SettingSection>
	);
};
export default ConnectedAccounts;
