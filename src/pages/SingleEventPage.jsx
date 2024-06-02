import React from 'react'
import { Container } from '../Styled/styled/Container.styled.jsx'
import SingleEventItem from '../components/SingleEventItem.jsx'

export default function SingleEventPage() {

    return (
        <Container>
            <div>
                <h1>Event</h1>
                <h2 style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,.8)',
                    fontSize: '19px',
                    margin: '0 auto',
                    padding: '0 3.5rem'
                }}>
                    You are about to score some tickets to
                </h2>
            </div>
            <SingleEventItem />
        </Container>
    )
}