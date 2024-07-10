import { ComponentProps, ReactNode } from 'react';

interface SecundaryButtonProps extends ComponentProps<'button'> {
	children: ReactNode;
}

export function SecundaryButton({ children, ...props }: SecundaryButtonProps) {
	return (
		<button {...props} className='secundary-button'>
			{children}
		</button>
	);
}
