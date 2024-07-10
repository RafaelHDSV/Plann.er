import { ArrowRight, UserRoundPlus } from 'lucide-react';

interface InviteGuestProps {
	setEmailContainerVisible: (string: boolean) => void;
	emails: string[];
	setConfirmContainerVisible: (string: boolean) => void;
}

export function InviteGuest(props: InviteGuestProps) {
	return (
		<div className='primary-container'>
			<div className='input-container'>
				<button
					className='who-button'
					onClick={() => {
						props.setEmailContainerVisible(true);
					}}>
					<label htmlFor='who'>
						<UserRoundPlus className='input-icon'></UserRoundPlus>
					</label>

					{props.emails.length > 1 ? (
						<span className='peoples'>
							{props.emails.length} pessoa(s) convidada(s){' '}
						</span>
					) : (
						<span>Quem estará na viagem?</span>
					)}
				</button>
			</div>

			<button
				onClick={() => {
					props.setConfirmContainerVisible(true);
				}}
				className='primary-button'>
				Confirmar Viagem <ArrowRight className='input-icon' />
			</button>
		</div>
	);
}
