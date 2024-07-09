import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export function App() {
	return (
		<main className='App'>
			<div className='main-container'>
				<div className='logo'>
					<img src='/logo.svg' alt='logo.svg' />
					<p>
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className='search-container'>
					<div className='input-container'>
						<div className='input'>
							<label htmlFor='where'>
								<MapPin className='input-icon'></MapPin>
							</label>
							<input
								id='where'
								type='text'
								placeholder='Para onde você vai?'
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
							/>
						</div>
					</div>

					<button>
						Continuar <ArrowRight className='input-icon' />
					</button>
				</div>

				<span>
					Ao planejar sua viagem pela plann.er você
					automaticamente concorda <br /> com nossos{' '}
					<a href='#'>termos de uso</a> e{' '}
					<a href='#'>políticas de privacidade</a>.
				</span>
			</div>
		</main>
	);
}
