import React, { FC, PropsWithChildren } from 'react'

type OwnProps = PropsWithChildren & {
    alignItems?: string;
    justifyContent?: string;
    className?: string;
}

const VContainer: FC<OwnProps> = ({children, className}) => {

    return <section className={`flex flex-col ${className}`}>
        {children}
    </section>
}

const HContainer: FC<OwnProps> = ({children, className}) => {

    return <section className={`flex flex-row ${className}`}>
        {children}
    </section>
}

export {
    VContainer, HContainer
}