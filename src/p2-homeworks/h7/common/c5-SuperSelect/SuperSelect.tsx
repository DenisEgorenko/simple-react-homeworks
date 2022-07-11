import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        value,
        onChangeOption, onChange,
        ...restProps
    }
) => {

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => <option key={o + '-' + i}
                                                                                 selected={value === o}
                                                                                 value={o}>{o}</option>) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)
    }

    return (
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
