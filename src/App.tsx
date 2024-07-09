import { useState } from 'react';

import {
	MapPin,
	Calendar,
	ArrowRight,
	UserRoundPlus,
	Settings2,
	X,
	AtSign,
	Plus,
} from 'lucide-react';

export function App() {
	const [guestContainerVisible, setGuestContainerVisible] = useState(false);
	const [emailContainerVisible, setEmailContainerVisible] = useState(false);

	return (
		<main className='App'>
			<div className='main-container'>
				<div className='logo'>
					<img src='/logo.svg' alt='logo.svg' />
					<p>
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className='containers'>
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
									disabled={guestContainerVisible}
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
									disabled={guestContainerVisible}
								/>
							</div>
						</div>

						{guestContainerVisible ? (
							<button
								className='secundary-button'
								onClick={() => {
									setGuestContainerVisible(false);
								}}>
								Alterar local/data
								<Settings2 className='input-icon' />
							</button>
						) : (
							<button
								className='primary-button'
								onClick={() => {
									setGuestContainerVisible(true);
								}}>
								Continuar{' '}
								<ArrowRight className='input-icon' />
							</button>
						)}
					</div>

					{guestContainerVisible && (
						<div className='primary-container'>
							<div className='input-container'>
								<button
									className='who-button'
									onClick={() => {
										setEmailContainerVisible(
											true
										);
									}}>
									<label htmlFor='who'>
										<UserRoundPlus className='input-icon'></UserRoundPlus>
									</label>

									<span>Quem estará na viagem?</span>
								</button>
							</div>

							<button className='primary-button'>
								Confirmar Viagem{' '}
								<ArrowRight className='input-icon' />
							</button>
						</div>
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
				<>
					<div className='email-effect'></div>

					<div className='email-container'>
						<header>
							<div className='text'>
								<h2>Selecionar convidados</h2>
								<span>
									Os convidados irão receber e-mails
									para confirmar a participação na
									viagem.
								</span>
							</div>

							<button
								onClick={() => {
									setEmailContainerVisible(false);
								}}>
								<X className='input-icon' />
							</button>
						</header>

						<div className='emails'>
							<div className='email'>
								<span>jessica.white44@yahoo.com</span>
								<button className='input-icon'>
									<X size={'1rem'} />
								</button>
							</div>
							<div className='email'>
								<span>jessica.white44@yahoo.com</span>
								<button className='input-icon'>
									<X size={'1rem'} />
								</button>
							</div>
							<div className='email'>
								<span>jessica.white44@yahoo.com</span>
								<button className='input-icon'>
									<X size={'1rem'} />
								</button>
							</div>
						</div>

						<form>
							<AtSign
								className='input-icon'
								size={'1rem'}
							/>

							<input
								type='text'
								placeholder='Digite o email do convidado'
							/>

							<button className='primary-button'>
								Convidar
								<Plus className='input-icon' />
							</button>
						</form>
					</div>
				</>
			)}
		</main>
	);
}
