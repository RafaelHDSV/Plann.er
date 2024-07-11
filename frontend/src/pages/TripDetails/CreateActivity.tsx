import { Calendar, Tag, X } from 'lucide-react';
import { PrimaryButton } from '../../components/PrimaryButton';
import { FormEvent } from 'react';
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';

interface CreateActivityProps {
	setCreateActivity: (string: boolean) => void;
}

export function CreateActivity(props: CreateActivityProps) {
	const { tripId } = useParams();

	async function createActivityFunction(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const data = new FormData(e.currentTarget);
		const title = data.get('title')?.toString();
		const occurs_at = data.get('occurs_at')?.toString();

		await api.post(`trips/${tripId}/activities`, {
			title,
			occurs_at,
		});

		window.document.location.reload();
	}

	return (
		<>
			<div className='effect'></div>

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

				<form onSubmit={createActivityFunction}>
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
							name='occurs_at'
							placeholder='Data e horário da atividade'
						/>
					</div>

					<PrimaryButton type='submit'>
						Salvar atividade
					</PrimaryButton>
				</form>
			</div>
		</>
	);
}
