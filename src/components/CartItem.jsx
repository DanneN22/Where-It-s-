import React, { useEffect, useState } from 'react';
import { StyledCartItem } from '../Styled/styled/CartItem.styled.jsx'
import { useCartStore } from '../Store.js'

// Icons 
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function CartItem({ thisEvent }) {
    const { cart, removeFromCart, addToCart } = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        addToCart: state.addToCart,
    }))

    const [isOrderPage, setIsOrderPage] = useState(false)

    useEffect(() => {
        setIsOrderPage(location.pathname === '/order')
    }, [])

    return (
        <StyledCartItem>
            {
                !isOrderPage ?
                    thisEvent.inCart ? <h5> {thisEvent.price * thisEvent.inCart} </h5> : <h5> 0 </h5>
                    : <>
                        <h3> {thisEvent.name} </h3>
                        <h4> {`
                            ${thisEvent.when.date}
                            kl
                            ${thisEvent.when.from}
                            -
                            ${thisEvent.when.to}
                            `}
                        </h4>
                    </>
            }

            <div>
                <button
                    aria-label={`Remove from cart button`}
                    onClick={() => removeFromCart(thisEvent, cart)
                    }>
                    <FaMinus
                        color='white'
                        size='20px'
                    />
                </button>
                {thisEvent.inCart ? <p> {thisEvent.inCart} </p> : <p> 0 </p>}
                <button
                    aria-label={`Add to cart button`}
                    onClick={() => addToCart(thisEvent, cart)
                    }>
                    <FaPlus
                        color='white'
                        size='20px'
                    />
                </button>
            </div>
        </StyledCartItem >
    )
}