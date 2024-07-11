import { Plus, CircleCheck } from 'lucide-react';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface ActivityProps {
	setCreateActivity: (string: boolean) => void;
}

interface Activity {
	date: string;
	activities: {
		id: string;
		title: string;
		occurs_at: string;
	}[];
}

export function Activity(props: ActivityProps) {
	const { tripId } = useParams();
	const [activities, setActivities] = useState<Activity[]>([]);

	useEffect(() => {
		api.get(`/trips/${tripId}/activities`).then((response) =>
			setActivities(response.data.activities)
		);
	}, [tripId]);

	return (
		<div className='activities'>
			<header>
				<h2>Atividades</h2>

				<PrimaryButton
					onClick={() => {
						props.setCreateActivity(true);
					}}>
					<Plus className='input-icon' />
					Cadastrar Atividade
				</PrimaryButton>
			</header>

			<div className='days'>
				{activities.map((activity) => {
					return (
						<div key={activity.date} className='day'>
							<div className='name'>
								<span>
									Dia {format(activity.date, 'dd')}
								</span>
								<span>
									{format(activity.date, 'EEEE', {
										locale: ptBR,
									})}
								</span>
							</div>

							{activity.activities.length > 0 ? (
								<div className='activities-day'>
									{activity.activities.map(
										(singleActivity) => {
											return (
												<div
													className='activitie-day'
													key={
														singleActivity.id
													}>
													<CircleCheck className='input-icon' />
													<span>
														{
															singleActivity.title
														}
													</span>
													<span>
														{format(
															singleActivity.occurs_at,
															'HH:mm'
														)}
														h
													</span>
												</div>
											);
										}
									)}
								</div>
							) : (
								<p>
									Nenhuma atividade cadastrada nessa
									data.
								</p>
							)}
						</div>
					);
				})}

				{/* <div className='day'>
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
				</div> */}
			</div>
		</div>
	);
}
