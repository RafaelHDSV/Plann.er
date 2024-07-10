// react router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import { NewTrip } from './pages/NewTrip';
import { TripDetails } from './pages/TripDetails';

const router = createBrowserRouter([
	{
		path: '/',
		element: <NewTrip />,
	},
	{
		path: '/trips/:tripId',
		element: <TripDetails />,
	},
]);

export function App() {
	return <RouterProvider router={router} />;
}
