import { ArrowRight, UserRoundPlus } from 'lucide-react';
import { PrimaryButton } from '../../components/PrimaryButton';

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

					{props.emails.length > 0 ? (
						<span className='peoples'>
							{props.emails.length} pessoa(s) convidada(s){' '}
						</span>
					) : (
						<span>Quem estará na viagem?</span>
					)}
				</button>
			</div>

			<PrimaryButton
				onClick={() => {
					props.setConfirmContainerVisible(true);
				}}>
				Confirmar Viagem <ArrowRight className='input-icon' />
			</PrimaryButton>
		</div>
	);
}
