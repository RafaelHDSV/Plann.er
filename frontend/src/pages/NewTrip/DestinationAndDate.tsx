import { useState } from 'react';

import { ArrowRight, Calendar, MapPin, Settings2, X } from 'lucide-react';

import { DateRange, DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

import { PrimaryButton } from '../../components/PrimaryButton';
import { SecundaryButton } from '../../components/SecundaryButton';

interface DestinationAndDateProps {
	guestContainerVisible: boolean;
	setGuestContainerVisible: (string: boolean) => void;
}

export function DestinationAndDate(props: DestinationAndDateProps) {
	const [datePickerVisible, setDatePickerVisible] = useState(false);
	const [date, setDate] = useState<DateRange | undefined>();

	const displayedDate =
		date && date.from && date.to
			? format(date.from, "dd' de 'LLL")
					.concat(' até ')
					.concat(format(date.to, "dd' de 'LLL"))
			: null;

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

				<button
					className='input'
					disabled={props.guestContainerVisible}
					onClick={() => {
						setDatePickerVisible(true);
					}}>
					<Calendar className='input-icon'></Calendar>
					<span>{displayedDate || 'Quando?'}</span>
				</button>
			</div>

			{datePickerVisible && (
				<>
					<div className='date-effect'></div>

					<div className='date-container'>
						<header>
							<div className='text'>
								<h2>Selecione a data</h2>
							</div>

							<button
								onClick={() => {
									setDatePickerVisible(false);
								}}>
								<X className='input-icon' />
							</button>
						</header>

						<DayPicker
							mode='range'
							selected={date}
							onSelect={setDate}
						/>
					</div>
				</>
			)}

			{props.guestContainerVisible ? (
				<SecundaryButton
					onClick={() => {
						props.setGuestContainerVisible(false);
					}}>
					Alterar local/data
					<Settings2 className='input-icon' />
				</SecundaryButton>
			) : (
				<PrimaryButton
					onClick={() => {
						props.setGuestContainerVisible(true);
					}}>
					Continuar <ArrowRight className='input-icon' />
				</PrimaryButton>
			)}
		</div>
	);
}
