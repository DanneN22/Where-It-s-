import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledEventItem } from '../Styled/styled/EventItem.styled.jsx'
import { splitDate } from '../Store.js';

export default function EventItem({ event }) {

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    useEffect(() => {
        splitDate(setDay, setMonth, event)
    }, [event])

    return (
        <Link to={`/events/${event.id}`} style={{ width: '100%', textDecoration: 'none' }}>
            <StyledEventItem>
                <section>
                    <p>
                        {day}
                        <span>
                            {month}
                        </span>
                    </p>
                </section>

                <section>

                    <h3> {event.name} </h3>
                    <div>
                        <div>
                            <h5> {event.where} </h5>
                            <h6> {event.when.from} - {event.when.to} </h6>
                        </div>
                        <h2>{event.price} sek</h2>
                    </div>
                </section>
            </StyledEventItem>
        </Link>
    )
}