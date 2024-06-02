import React from 'react'
import { StyledIndicatorDot } from '../Styled/styled/IndicatorDot.styled'

export default function IndicatorDot({ isActive, value }) {
    return (
        <>
            {
                isActive ?
                    <StyledIndicatorDot
                        style={{ color: 'rgba(255,255,255,1)' }}
                    > {value} </StyledIndicatorDot >
                    :
                    <StyledIndicatorDot> {value} </StyledIndicatorDot >
            }
        </>
    )
}