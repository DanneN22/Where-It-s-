import React from 'react'
import { useCartStore } from '../Store.js'
import { Container } from '../Styled/styled/Container.styled.jsx'

// components 
import EventItem from '../components/EventItem.jsx'

import BackBtn from '../components/BackBtn.jsx'

export default function OrderPage() {

    const { cart, createOrder } = useCartStore((state) => ({
        cart: state.cart,
        createOrder: state.createOrder,
    }))

    return (
        <>
            <BackBtn/>
            <Container>
                <h1>Events to choose from</h1>
                <ul style={{width: '50%', listStyleType: "none"}}>
                    <li>
                        <EventItem event={
                            {
                                id: "VM2RSbKQ841XiDhyxfJs2npR",
                                name: "Lasse-Stefanz",
                                price: 400,
                                where: "Avicii arena",
                                when: {
                                    date: "21 Mars",
                                    from: "20.00",
                                    to: "22:00"
                                }
                            } 
                        }
                        />
                    </li>
                    <li>
                        <EventItem event={
                            {
                                id : "thsOVsUsLBWzukIKgj135Dzi",
                                name: "Pelle trubadur",
                                price: 119,
                                where: "Puben på hörnet",
                                when: {
                                    date: "11 April",
                                    from: "21.00",
                                    to: "23:00"
                                }
                            }
                        }
                        />
                    </li>
                    <li>
                        <EventItem event={
                            {
                                id : "ZAsn9ZXFxWTXDE5TCy8Z7aUB",
                                name: "Kajsas kör",
                                price: 0,
                                where: "Götaplatsen",
                                when: {
                                    date: "13 December",
                                    from: "15.00",
                                    to: "16:00"
                                }
                            }
                        } />
                    </li>

                    <li>
                        <EventItem event={
                            {
                                id : "kpv5u48SUziMmCu1FMEHiVKJ",
                                name: "Klubb Untz",
                                price: 150,
                                where: "Mörka hörnet",
                                when: {
                                    date: "4 Juli",
                                    from: "20.00",
                                    to: "05:00"
                                }
                            }
                        } />
                    </li>

                    <li>
                        <EventItem event={
                            {
                                id : "I21pFeU1q3wvInFME34kHWbJ",
                                name: "Greats symfoniker",
                                price: 300,
                                where: "Kungliga operan",
                                when: {
                                    date: "15 November",
                                    from: "18.00",
                                    to: "20:00"
                                }
                            }
                        } />
                    </li>
                </ul>
            </Container>
        </>
    )
}