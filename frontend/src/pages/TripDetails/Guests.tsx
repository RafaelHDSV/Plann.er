import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { useParams } from 'react-router-dom';

interface Participant {
	id: string;
	name: string | null;
	email: string;
	is_confirmed: boolean;
}

export function Guests() {
	const { tripId } = useParams();
	const [participants, setParticipants] = useState<Participant[]>([]);

	useEffect(() => {
		api.get(`/trips/${tripId}/participants`).then((response) =>
			setParticipants(response.data.participants)
		);
	}, [tripId]);

	return (
		<div className='guest-container'>
			<h2>Convidados</h2>

			<div className='guests'>
				{participants.map((participant, index) => {
					return (
						<div className='guest' key={participant.id}>
							<div className='text'>
								<span>
									{participant.name ??
										`Convidado ${index}`}
								</span>

								<span>{participant.email}</span>
							</div>

							{participant.is_confirmed ? (
								<CheckCircle2
									className='input-icon'
									style={{
										color: 'var(--light-green)',
									}}
								/>
							) : (
								<CircleDashed className='input-icon' />
							)}
						</div>
					);
				})}
			</div>

			<button className='secundary-button'>
				<UserCog className='input-icon' />
				Gerenciar convidados
			</button>
		</div>
	);
}
