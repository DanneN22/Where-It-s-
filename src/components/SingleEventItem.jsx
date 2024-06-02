import React, { useEffect, useState } from 'react'
import { StyledSingleEventItem } from '../Styled/styled/SingleEventItem.styled.jsx'
import { useCartStore } from '../Store.js'
import { useParams } from 'react-router-dom'
import { useEventStore } from '../Store.js'

// Components
import CartItem from '../components/CartItem.jsx'
import Button from './Button.jsx'
import BackBtn from './BackBtn.jsx'

export default function SingleEventItem() {

    const eventItems = useEventStore((state) => state.eventItems)
    const { cart } = useCartStore((state) => ({ cart: state.cart }))
    const { id } = useParams();
    const [thisEvent, setThisEvent] = useState({})

    useEffect(() => {
        handleThisEvent()
    }, [id, eventItems])

    useEffect(() => {
        cart.map((item) => {
            if (item.id === thisEvent.id) {
                setThisEvent(item)
            }
        })
    }, [thisEvent])

    const handleThisEvent = () => {
        const filterdEvent = eventItems.find((eventItem) => eventItem.id === id)
        setThisEvent(structuredClone(filterdEvent))
    }

    return (
        <>
            <BackBtn />
            <StyledSingleEventItem>
                {
                    thisEvent && thisEvent.when && <>
                        <h2> {thisEvent.name}</h2>
                        <h3>{`
                        ${thisEvent.when.date}
                        kl
                        ${thisEvent.when.from}
                        -
                        ${thisEvent.when.to}`}
                        </h3>
                        <h4> {thisEvent.where} </h4>
                        <CartItem thisEvent={thisEvent} />
                    </>
                }
            </StyledSingleEventItem>

            {thisEvent && thisEvent.inCart > 0 && <Button value='Till varukorgen' path='/order' />}
        </>
    )
}