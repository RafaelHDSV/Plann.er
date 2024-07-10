import { FormEvent } from 'react';
import { AtSign, Plus, X } from 'lucide-react';

interface EmailContainerProps {
	setEmailContainerVisible: (string: boolean) => void;
	emails: string[];
	addEmail: (event: FormEvent<HTMLFormElement>) => void;
	removeEmail: (emailToRemove: string) => void;
}

export function EmailContainer(props: EmailContainerProps) {
	return (
		<>
			<div className='email-effect'></div>

			<div className='email-container'>
				<header>
					<div className='text'>
						<h2>Selecionar convidados</h2>
						<span>
							Os convidados irão receber e-mails para
							confirmar a participação na viagem.
						</span>
					</div>

					<button
						onClick={() => {
							props.setEmailContainerVisible(false);
						}}>
						<X className='input-icon' />
					</button>
				</header>

				<div className='emails'>
					{props.emails.map((email) => (
						<div className='email' key={email}>
							<span>{email}</span>

							<button className='input-icon'>
								<X
									onClick={() =>
										props.removeEmail(email)
									}
									size={'1rem'}
								/>
							</button>
						</div>
					))}
				</div>

				<form onSubmit={props.addEmail}>
					<AtSign className='input-icon' size={'1rem'} />

					<input
						type='email'
						name='email'
						placeholder='Digite o email do convidado'
					/>

					<button type='submit' className='primary-button'>
						Convidar
						<Plus className='input-icon' />
					</button>
				</form>
			</div>
		</>
	);
}
