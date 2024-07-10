import { useState } from 'react';

import { DestinationHeader } from './DestinationHeader';
import { Activity } from './Activity';
import { ImportantLinks } from './ImportantLinks';
import { Guests } from './Guests';
import { CreateActivity } from './CreateActivity';

export function TripDetails() {
	const [createActivity, setCreateActivity] = useState(false);

	return (
		<div id='trip-details'>
			<DestinationHeader />

			<main>
				<Activity setCreateActivity={setCreateActivity} />

				<aside>
					<ImportantLinks />

					<Guests />
				</aside>
			</main>

			{createActivity && (
				<CreateActivity setCreateActivity={setCreateActivity} />
			)}
		</div>
	);
}
