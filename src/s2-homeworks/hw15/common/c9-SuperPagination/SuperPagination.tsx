import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount/itemsCountForPage)  // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)


    }

    // const onChangeSelect = (event: any) => {
    //     // пишет студент
    // }
    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const newCount = +event.currentTarget.value
        onChange(1, newCount)


    }
    console.log('Pagination page:', page, 'lastPage:', lastPage)
    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент

                    '& .MuiPaginationItem-root': {
                        // color: '#0D0B0C',
                        // fontWeight: '400',
                        borderRadius:"2px",
                        backgroundColor: 'white',

                    },

                    '& .Mui-selected': {
                        backgroundColor: '#1976d2',
                        color: 'white',
                    }



                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                // onChange={onChangeSelect}
                onChangeOption={(value) => {
                    onChange(1, Number(value)) // обязательно привести к числу
                }}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
