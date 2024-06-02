import React from 'react'
import { useCartStore } from '../Store.js'

// Components 
import { Container } from '../Styled/styled/Container.styled.jsx'
import PageIndicator from '../components/PageIndicator.jsx'
import TicketCardContainer from '../components/TicketCardContainer.jsx'
import Fade from '../components/Fade.jsx'
import ErrorMsg from '../components/ErrorMsg.jsx'

export default function TicketPage() {

    const order = useCartStore((state) => state.order)

    return (
        <>
            <Fade />

            <Container style={{ display: 'block' }}>

                {order.length > 0 ?
                    <>
                        {
                            order.map((orderItem, index) => {
                                return <TicketCardContainer key={index} orderItem={orderItem} />
                            })
                        }
                    </>
                    :
                    <ErrorMsg value={'Tyvärr du har inga köpta biljetter'} />
                }
            </Container>
            <PageIndicator />
        </>
    )
}