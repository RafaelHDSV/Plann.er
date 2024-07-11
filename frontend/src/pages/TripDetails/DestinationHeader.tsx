import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { format } from 'date-fns';
import { MapPin, Calendar, Settings2 } from 'lucide-react';

import { SecundaryButton } from '../../components/SecundaryButton';

interface Trip {
	id: string;
	destination: string;
	starts_at: string;
	ends_at: string;
	is_confirmed: boolean;
}

export function DestinationHeader() {
	const { tripId } = useParams();
	const [trip, setTrip] = useState<Trip | undefined>();

	useEffect(() => {
		api.get(`/trips/${tripId}`).then((response) =>
			setTrip(response.data.trip)
		);
	}, [tripId]);

	const displayedDate = trip
		? format(trip.starts_at, "dd' de 'LLL")
				.concat(' até ')
				.concat(format(trip.ends_at, "dd' de 'LLL"))
		: null;

	return (
		<header>
			<div className='destination'>
				<MapPin className='input-icon' />
				<span>{trip?.destination}</span>
			</div>

			<div className='date-and-change'>
				<div className='date'>
					<Calendar className='input-icon' />
					<span>{displayedDate}</span>
				</div>

				<SecundaryButton>
					Alterar local/data
					<Settings2 className='input-icon' />
				</SecundaryButton>
			</div>
		</header>
	);
}
