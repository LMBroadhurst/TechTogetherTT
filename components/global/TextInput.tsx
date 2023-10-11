import { eye, eyeWithSlash } from '@/utils/icons'
import React, { FC, InputHTMLAttributes } from 'react'
// import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

type OwnProps = {
    id: string
    label: string
    icon?: any
    onChange?: any

    isPasswordInput?: boolean
    passwordStatus?: boolean
    onPasswordTextToggle?: any
}

const TextInput: FC<OwnProps & InputHTMLAttributes<HTMLInputElement>> = ({
    id, label, icon, type, name, value, min, minLength,
    passwordStatus, isPasswordInput,
    onChange, onPasswordTextToggle
}) => {

    return (
        <section className='flex flex-col gap-1'>
            <label 
                id={id}
                className='text-slate-600 text-sm'
            >
                {label}
            </label>

            <section className='flex flex-col'>
                <input 
                    id={id} 
                    aria-labelledby={id} 
                    data-testid={id} 
                    name={name} 
                    type={type} 
                    className='border rounded-lg px-4 py-2' 
                    min={min}
                    minLength={minLength}
                    value={value}
                    onChange={onChange} 
                />

                <section 
                    className='flex items-center self-end -translate-x-4 -translate-y-8 hover:cursor-pointer'
                    onClick={onPasswordTextToggle}
                >
                    { isPasswordInput ? ( 
                        passwordStatus ? eye : eyeWithSlash
                    ) : null}
                </section>
            </section>
        </section> 
    );
}

export default TextInput