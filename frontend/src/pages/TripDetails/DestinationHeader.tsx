import { MapPin, Calendar, Settings2 } from 'lucide-react';

import { SecundaryButton } from '../../components/SecundaryButton';

export function DestinationHeader() {
	return (
		<header>
			<div className='destination'>
				<MapPin className='input-icon' />
				<span>Florianópolis, Brazil</span>
			</div>

			<div className='date-and-change'>
				<div className='date'>
					<Calendar className='input-icon' />
					<span>17 a 23 de agosto</span>
				</div>

				<SecundaryButton>
					Alterar local/data
					<Settings2 className='input-icon' />
				</SecundaryButton>
			</div>
		</header>
	);
}
