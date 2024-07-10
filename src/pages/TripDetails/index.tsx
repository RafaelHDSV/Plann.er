import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from 'lucide-react';

export function TripDetails() {
	return (
		<div id='trip-details'>
			<header>
				<div className='destination'>
					<MapPin className='input-icon' />
					<span>Florianópolis, Brazil</span>
				</div>

				<div className='date-and-change'>
					<div className='date'>
						<Calendar className='input-icon' />
						<span>17 a 23 de agosto</span>
					</div>

					<button className='secundary-button'>
						Alterar local/data
						<Settings2 className='input-icon' />
					</button>
				</div>
			</header>

			<main>
				<div className='activities'>
					<header>
						<h2>Atividades</h2>
						<button className='primary-button'>
							<Plus className='input-icon' />
							Cadastrar Atividade
						</button>
					</header>

					<div className='days'>
						<div className='day'>
							<div className='name'>
								<span>Dia 17</span>
								<span>Sábado</span>
							</div>

							<p>
								Nenhuma atividade cadastrada nessa data.
							</p>
						</div>

						<div className='day'>
							<div className='name'>
								<span>Dia 18</span>
								<span>Domingo</span>
							</div>

							<div className='activities-day'>
								<div className='activitie-day'>
									<CircleCheck className='input-icon' />
									<span>Academia em grupo</span>
									<span>08:00h</span>
								</div>

								<div className='activitie-day'>
									<CircleCheck className='input-icon' />
									<span>Academia em grupo</span>
									<span>08:00h</span>
								</div>
							</div>
						</div>

						<div className='day'>
							<div className='name'>
								<span>Dia 19</span>
								<span>Segunda-feira</span>
							</div>

							<p>
								Nenhuma atividade cadastrada nessa data.
							</p>
						</div>
					</div>
				</div>

				<aside>b</aside>
			</main>
		</div>
	);
}
