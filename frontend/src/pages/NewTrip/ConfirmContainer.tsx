import { FormEvent } from 'react';
import { Mail, User, X } from 'lucide-react';
import { PrimaryButton } from '../../components/PrimaryButton';

interface ConfirmContainerProps {
	setConfirmContainerVisible: (string: boolean) => void;
	createTrip: (event: FormEvent<HTMLFormElement>) => void;
	setOwnerName: (name: string) => void;
	setOwnerEmail: (email: string) => void;
}

export function ConfirmContainer(props: ConfirmContainerProps) {
	return (
		<>
			<div className='effect'></div>

			<div className='confirm-container'>
				<header>
					<div className='text'>
						<h2>Confirmar criação da viagem</h2>
						<span>
							Para concluir a criação da viagem para{' '}
							<strong>Florianópolis, Brasil</strong> nas
							datas de{' '}
							<strong>16 a 27 de Agosto de 2024</strong>{' '}
							preencha seus dados abaixo:
						</span>
					</div>

					<button
						onClick={() => {
							props.setConfirmContainerVisible(false);
						}}>
						<X className='input-icon' />
					</button>
				</header>

				<form onSubmit={props.createTrip}>
					<div className='input-container'>
						<User className='input-icon' />
						<input
							type='text'
							name='text'
							placeholder='Seu nome completo'
							onChange={(event) =>
								props.setOwnerName(event.target.value)
							}
						/>
					</div>

					<div className='input-container'>
						<Mail className='input-icon' />
						<input
							type='email'
							name='email'
							placeholder='Seu e-mail pessoal'
							onChange={(event) =>
								props.setOwnerEmail(event.target.value)
							}
						/>
					</div>

					<PrimaryButton type='submit'>
						Confirmar criação da viagem
					</PrimaryButton>
				</form>
			</div>
		</>
	);
}
