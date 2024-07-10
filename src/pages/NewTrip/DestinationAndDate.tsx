import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react';

interface DestinationAndDateProps {
	guestContainerVisible: boolean;
	setGuestContainerVisible: (string: boolean) => void;
}

export function DestinationAndDate(props: DestinationAndDateProps) {
	return (
		<div className='primary-container'>
			<div className='input-container'>
				<div className='input'>
					<label htmlFor='where'>
						<MapPin className='input-icon'></MapPin>
					</label>

					<input
						id='where'
						type='text'
						placeholder='Para onde você vai?'
						disabled={props.guestContainerVisible}
					/>
				</div>

				<div className='input'>
					<label htmlFor='when'>
						<Calendar className='input-icon'></Calendar>
					</label>

					<input
						id='when'
						type='text'
						placeholder='Quando?'
						disabled={props.guestContainerVisible}
					/>
				</div>
			</div>

			{props.guestContainerVisible ? (
				<button
					className='secundary-button'
					onClick={() => {
						props.setGuestContainerVisible(false);
					}}>
					Alterar local/data
					<Settings2 className='input-icon' />
				</button>
			) : (
				<button
					className='primary-button'
					onClick={() => {
						props.setGuestContainerVisible(true);
					}}>
					Continuar <ArrowRight className='input-icon' />
				</button>
			)}
		</div>
	);
}
