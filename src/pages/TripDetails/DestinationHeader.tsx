import { MapPin, Calendar, Settings2 } from 'lucide-react';

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

				<button className='secundary-button'>
					Alterar local/data
					<Settings2 className='input-icon' />
				</button>
			</div>
		</header>
	);
}
