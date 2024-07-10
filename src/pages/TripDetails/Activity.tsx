import { Plus, CircleCheck } from 'lucide-react';

interface ActivityProps {
	setCreateActivity: (string: boolean) => void;
}

export function Activity(props: ActivityProps) {
	return (
		<div className='activities'>
			<header>
				<h2>Atividades</h2>
				<button
					onClick={() => {
						props.setCreateActivity(true);
					}}
					className='primary-button'>
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

					<p>Nenhuma atividade cadastrada nessa data.</p>
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

					<p>Nenhuma atividade cadastrada nessa data.</p>
				</div>
			</div>
		</div>
	);
}
