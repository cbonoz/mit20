import React, { useEffect } from 'react';
import DashboardSection from './../components/DashboardSection';
import { useAuth } from './../util/auth.js';
import { useRouter } from './../util/router.js';

function DashboardPage(props) {
	return (
		<div className="dashboard-section">
			<button>Learn more</button>
		</div>
	);
}

export default DashboardPage;
