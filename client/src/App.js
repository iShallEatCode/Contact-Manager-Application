import './App.css';

import ContactState from './context/contact/ContactState';
import { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<ContactState>
			<Fragment>
				<Navbar />
				<Outlet />
			</Fragment>
		</ContactState>
	);
};

export default App;
