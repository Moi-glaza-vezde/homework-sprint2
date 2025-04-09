import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '147px',

                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B', // серый цвет незаполненной части
                },


                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: 'white',
                    border: '1px solid #00CC22',
                    boxShadow: 'none',
                   // position: 'relative',



                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 6,
                        height: 6,
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)', // центрируем
                    },
                }
            }}
            {...props}


            // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
