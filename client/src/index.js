import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import About from './components/pages/About';
import App from './App';
import Home from './components/pages/Home';
import ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
