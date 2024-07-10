import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EmailContainer } from './EmailContainer';
import { ConfirmContainer } from './ConfirmContainer';
import { DestinationAndDate } from './DestinationAndDate';
import { InviteGuest } from './InviteGuest';

export function NewTrip() {
	const navigate = useNavigate();

	const [guestContainerVisible, setGuestContainerVisible] = useState(false);
	const [emailContainerVisible, setEmailContainerVisible] = useState(false);
	const [confirmContainerVisible, setConfirmContainerVisible] =
		useState(false);
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

	function createTrip(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		navigate('/trips/123');
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
				/>
			)}
		</main>
	);
}
