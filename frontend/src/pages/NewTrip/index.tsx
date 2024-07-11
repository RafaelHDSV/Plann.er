import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-day-picker';

import { EmailContainer } from './EmailContainer';
import { ConfirmContainer } from './ConfirmContainer';
import { DestinationAndDate } from './DestinationAndDate';
import { InviteGuest } from './InviteGuest';
import { api } from '../../lib/axios';

export function NewTrip() {
	// navegação de rotas
	const navigate = useNavigate();

	// visibilidade de componentes
	const [guestContainerVisible, setGuestContainerVisible] = useState(false);
	const [emailContainerVisible, setEmailContainerVisible] = useState(false);
	const [confirmContainerVisible, setConfirmContainerVisible] =
		useState(false);

	// informações sobre a viagem
	const [destination, setDestination] = useState('');
	const [date, setDate] = useState<DateRange | undefined>();
	const [ownerName, setOwnerName] = useState('');
	const [ownerEmail, setOwnerEmail] = useState('');
	const [emails, setEmails] = useState(['rafaelvieira1720@gmail.com']);

	function addEmail(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const email = data.get('email')?.toString();

		if (!email) {
			return;
		}

		if (emails.includes(email)) {
			return;
		}

		setEmails([...emails, email]);

		event.currentTarget.reset();
	}

	function removeEmail(emailToRemove: string) {
		const newEmailList = emails.filter(
			(email) => email !== emailToRemove
		);

		setEmails(newEmailList);
	}

	async function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!destination) {
			return;
		}

		if (!date?.from || !date?.to) {
			return;
		}

		if (emails.length === 0) {
			return;
		}

		if (!ownerEmail || !ownerName) {
			return;
		}

		const response = await api.post('/trips', {
			destination,
			starts_at: date.from,
			ends_at: date.to,
			emails_to_invite: emails,
			owner_name: ownerName,
			owner_email: ownerEmail,
		});

		const { tripId } = response.data;
		navigate(`/trips/${tripId}`);
	}

	return (
		<main className='App'>
			<div className='main-container'>
				<div>
					<img src='/logo.svg' alt='logo.svg' />

					<p>
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className='steps'>
					<DestinationAndDate
						guestContainerVisible={guestContainerVisible}
						setGuestContainerVisible={
							setGuestContainerVisible
						}
						setDestination={setDestination}
						date={date}
						setDate={setDate}
					/>

					{guestContainerVisible && (
						<InviteGuest
							emails={emails}
							setConfirmContainerVisible={
								setConfirmContainerVisible
							}
							setEmailContainerVisible={
								setEmailContainerVisible
							}
						/>
					)}
				</div>

				<span>
					Ao planejar sua viagem pela plann.er você
					automaticamente concorda <br /> com nossos{' '}
					<a href='#'>termos de uso</a> e{' '}
					<a href='#'>políticas de privacidade</a>.
				</span>
			</div>

			{emailContainerVisible && (
				<EmailContainer
					addEmail={addEmail}
					emails={emails}
					removeEmail={removeEmail}
					setEmailContainerVisible={setEmailContainerVisible}
				/>
			)}

			{confirmContainerVisible && (
				<ConfirmContainer
					createTrip={createTrip}
					setConfirmContainerVisible={setConfirmContainerVisible}
					setOwnerName={setOwnerName}
					setOwnerEmail={setOwnerEmail}
				/>
			)}
		</main>
	);
}
