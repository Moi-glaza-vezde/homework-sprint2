import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    change?: (id: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         change,
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: any[] = options
        ? options.map((o) => {

            return (
                <option
                    id={'hw7-option-' + o.id}
                    className={s.option}
                    key={o.id}
                    value={o.id}
                >
                    {o.value}
                </option>
            )
        })
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        const selectedId = Number(e.currentTarget.value);

        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)

        }
       change && change(selectedId)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            value={restProps.value}
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
