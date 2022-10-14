import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' |  'md' |  'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'md', children, asChild}: HeadingProps){
    //constante
    const Comp = asChild ? Slot : 'h2';

    return (
       <span className={clsx(
        'Heading-gray-100 font-bold font-sans',
        {
            'Heading-xs': size === 'sm',
            'Heading-xl': size === 'md',
            'Heading-2xl': size === 'lg',
        }
        )}>{children}</span>
    )
}