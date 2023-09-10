import React, { FC } from 'react'
// import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

type OwnProps = {
    id: string
    label: string
    inputType: "text" | "password" | "email"
    value?: string | number
    icon?: any
    onChange?: any
    apiProperty?: string

    isPasswordInput?: boolean
    passwordStatus?: boolean
    onPasswordTextToggle?: any
}

const TextInput: FC<OwnProps> = ({
    id, label, inputType, icon, 
    apiProperty,
    passwordStatus, isPasswordInput,
    onChange, onPasswordTextToggle
}) => {

    return (
        <section className='flex flex-col gap-1'>
            <label 
                id={id}
                className='text-slate-600'
            >{label}</label>

            <section className='flex flex-col'>
                <input id={id} aria-labelledby={id} data-testid={id} name={apiProperty} type={inputType} className='border rounded-lg px-2 py-2' onChange={onChange} />

                {
                    isPasswordInput ? ( 
                        passwordStatus ? (
                            // <EyeInvisibleOutlined 
                            //     onClick={onPasswordTextToggle}
                            //     className='flex items-center self-end -translate-x-4 -translate-y-7' 
                            // />
                            "Hid"
                        ) : (
                            // <EyeOutlined 
                            //     onClick={onPasswordTextToggle}
                            //     className='flex items-center self-end -translate-x-4 -translate-y-7' 
                            // />
                            "Vis"
                        )
                    ) : null
                }
                
            </section>
        </section> 
    );
}

export default TextInput