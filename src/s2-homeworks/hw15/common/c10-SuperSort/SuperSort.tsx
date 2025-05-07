import React from 'react'
import iconD from '../../Polygon 5.png'
import iconU from '../../Polygon 2.png'
import iconNU from '../../Polygon 6.png'
import iconND from '../../Polygon 7.png'
import s from '../../HW15.module.css'
// добавить в проект иконки и импортировать
const downIcon = iconD
const upIcon = iconU

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...


    if (sort === '') return down
    if (sort === down) return up
    if (sort === up) return ''
    return down



}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))

    }
    //
    // const icon = sort === down
    //     ? downIcon
    //     : sort === up
    //         ? upIcon
    //         : noneIcon
    const icon = sort === down

        ? <img id={id + '-icon-up'} src={upIcon} alt="↑"/>
        : sort === up
            ? <img id={id + '-icon-down'} src={downIcon} alt="↓"/>
            : (
                <span className={s.iconsBox} id={id + '-icon-none'}>
        <img src={iconNU} alt="none up"/>
        <img src={iconND} alt="none down"/>
      </span>
            )
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}
            {icon}

        </span>
    )
}

export default SuperSort
