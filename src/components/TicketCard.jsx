import React, { useEffect, useState } from 'react'
import { StyledTicketCard } from '../Styled/styled/TicketCard.styled.jsx'
import { splitDate } from '../Store.js'

export default function TicketCard({ orderItem }) {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    useEffect(() => {
        splitDate(setDay, setMonth, orderItem)
    }, [orderItem])

    return (
        <StyledTicketCard>
            <section>
                <p>WHAT</p>
                <h1> {orderItem.name}</h1>
            </section>
            <section>
                <p>WHERE</p>
                <h2>{orderItem.where}</h2>
            </section>
            <section>
                <div>
                    <p>WHEN</p>
                    <h3>{`${day} ${month}`}</h3>
                </div>
                <div>
                    <p>FROM</p>
                    <h4>{orderItem.when.from}</h4>
                </div>
                <div>
                    <p>To</p>
                    <h3>{orderItem.when.to}</h3>
                </div>
            </section>
            <section>
                <p>INFO</p>
                {orderItem.section && <h4>{`Section ${orderItem.section} - Seat ${orderItem.seat}`}</h4>}
            </section>
            <section>
                {orderItem.ticketNmbr && <h5>
                    {orderItem.ticketNmbr}
                    <span>#{orderItem.ticketNmbr}</span>
                </h5>}
            </section>
        </StyledTicketCard >
    )
}