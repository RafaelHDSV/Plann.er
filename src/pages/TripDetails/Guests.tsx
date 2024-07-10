import { CircleDashed, UserCog } from 'lucide-react';

export function Guests() {
	return (
		<div className='guest-container'>
			<h2>Convidados</h2>

			<div className='guests'>
				<div className='guest'>
					<div className='text'>
						<span>Jessica White</span>

						<span>jessica.white44@yahoo.com</span>
					</div>

					<CircleDashed className='input-icon' />
				</div>

				<div className='guest'>
					<div className='text'>
						<span>Dr. Rita Pacocha</span>

						<span>lacy.stiedemann@gmail.com</span>
					</div>

					<CircleDashed className='input-icon' />
				</div>
			</div>

			<button className='secundary-button'>
				<UserCog className='input-icon' />
				Gerenciar convidados
			</button>
		</div>
	);
}
