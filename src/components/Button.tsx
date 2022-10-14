import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps {

    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild}: ButtonProps){
    //constante
    const Comp = asChild ? Slot : 'button';

    return (
       <Comp className={clsx(
        'py-4 px-3 bg-orange-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-orange-200',

        )}>{children}</Comp>
    )
}