export function App() {
	return (
		<main className='App'>
			<div className='main-container'>
				<p>Convide seus amigos e planeje sua próxima viagem!</p>

				<div className='input-container'>
					<input type='text' placeholder='Para onde você vai?' />
					<input type='text' placeholder='Quando?' />

					<button>Continuar</button>
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
