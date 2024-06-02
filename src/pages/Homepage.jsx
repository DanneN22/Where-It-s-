import React from 'react'
import { Container } from '../Styled/styled/Container.styled.jsx'

// Components 
import PageIndicator from '../components/PageIndicator.jsx'

export default function HomePage() {
    return (
        <>
            <Container style={{
                textShadow: '1px 1px black',
                justifyContent: 'center',
            }}>
                <section>
                    <img  src="../src/assets/logo.png" alt="logo for Where it's @" />
                    <h1 > Where It's @ </h1>
                    <h2> Ticketsing made easy </h2>
                </section>


            </Container>
            <PageIndicator />
        </>
    )
}
