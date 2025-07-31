import type { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return <section>{children}</section>;
}
