import React from 'react'
import { useCartStore } from '../Store.js'
import { Container } from '../Styled/styled/Container.styled.jsx'

// components 
import Button from '../components/Button.jsx'
import Cart from '../components/Cart.jsx'
import BackBtn from '../components/BackBtn.jsx'

export default function OrderPage() {

    const { cart, createOrder } = useCartStore((state) => ({
        cart: state.cart,
        createOrder: state.createOrder,
    }))

    return (
        <>
            <BackBtn />
            <Container>
                <h1>Order</h1>
                <Cart />
                <Button value='Skicka order' path='/tickets' click={() => createOrder(cart)} />
            </Container>
        </>
    )
}

