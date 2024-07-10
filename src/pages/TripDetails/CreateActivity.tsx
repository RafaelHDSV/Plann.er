import { Calendar, Tag, X } from 'lucide-react';

interface CreateActivityProps {
	setCreateActivity: (string: boolean) => void;
}

export function CreateActivity(props: CreateActivityProps) {
	return (
		<>
			<div className='create-activity-effect'></div>

			<div className='create-activity-container'>
				<div className='header-create-activity'>
					<div className='text'>
						<h2>Cadastrar atividade</h2>
						<span>
							Todos convidados podem visualizar as
							atividades.
						</span>
					</div>

					<button
						onClick={() => {
							props.setCreateActivity(false);
						}}>
						<X className='input-icon' />
					</button>
				</div>

				<form>
					<div className='input-container'>
						<Tag className='input-icon' />
						<input
							type='text'
							name='title'
							placeholder='Qual a atividade?'
						/>
					</div>

					<div className='input-container'>
						<Calendar className='input-icon' />
						<input
							type='datetime-local'
							name='email'
							placeholder='Data e horário da atividade'
						/>
					</div>

					<button type='submit' className='primary-button'>
						Salvar atividade
					</button>
				</form>
			</div>
		</>
	);
}
