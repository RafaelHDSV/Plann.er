import { Link2, Plus } from 'lucide-react';
import { SecundaryButton } from '../../components/SecundaryButton';

export function ImportantLinks() {
	return (
		<div className='links-container'>
			<h2>Links importantes</h2>

			<div className='links'>
				<div className='link'>
					<div className='text'>
						<span>Reserva do AirBnB</span>

						<a href=''>
							https://www.airbnb.com.br/rooms/104700011104700011104700011
						</a>
					</div>

					<Link2 className='input-icon' />
				</div>

				<div className='link'>
					<div className='text'>
						<span>Reserva do AirBnB</span>

						<a href=''>
							https://www.airbnb.com.br/rooms/104700011104700011104700011
						</a>
					</div>

					<Link2 className='input-icon' />
				</div>
			</div>

			<SecundaryButton>
				<Plus className='input-icon' />
				Cadastrar novo link
			</SecundaryButton>
		</div>
	);
}
