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
	setDestination: (destination: string) => void;
	date: DateRange | undefined;
	setDate: (date: DateRange | undefined) => void;
}

export function DestinationAndDate(props: DestinationAndDateProps) {
	const [datePickerVisible, setDatePickerVisible] = useState(false);

	const displayedDate =
		props.date && props.date.from && props.date.to
			? format(props.date.from, "dd' de 'LLL")
					.concat(' até ')
					.concat(format(props.date.to, "dd' de 'LLL"))
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
						onChange={(event) =>
							props.setDestination(event.target.value)
						}
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
							selected={props.date}
							onSelect={props.setDate}
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
