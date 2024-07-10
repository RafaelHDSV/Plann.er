import { ComponentProps, ReactNode } from 'react';

interface PrimaryButtonProps extends ComponentProps<'button'> {
	children: ReactNode;
}

export function PrimaryButton({ children, ...props }: PrimaryButtonProps) {
	return (
		<button {...props} className='primary-button'>
			{children}
		</button>
	);
}
