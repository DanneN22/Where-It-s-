import { create } from "zustand";
import axios from "axios"

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, cart) => {
        if (!product.inCart) {
            product.inCart = 0;
        }
        const filterdCart = cart.filter((item) => item.id !== product.id)
        product.inCart++
        set(() => ({ cart: [...filterdCart, product] }))
    },
    removeFromCart: (product, cart) => {
        const filterdCart = cart.filter((item) => item.id !== product.id)
        if (product.inCart > 0) {
            product.inCart--
        }
        if (product.inCart > 0) {
            set(() => ({ cart: [...filterdCart, product] }))
        } else {
            set(() => ({ cart: [...filterdCart] }))
        }
    },
    order: [],
    createOrder: (cart) => {
        cart.map((item) => {
            if (item.id) {
                const newItem = []
                let seat = generateSeat()
                const section = generateSection()
                let ticketNmbr = generateTicketNmbr()
                if (item.inCart > 1) {
                    for (let i = 0; i < item.inCart; i++) {
                        item.ticketNmbr = ticketNmbr
                        item.seat = seat
                        item.section = section
                        newItem.push(structuredClone(item));
                        ticketNmbr = generateTicketNmbr()
                        seat++
                    }
                } else {
                    item.ticketNmbr = ticketNmbr
                    item.seat = seat
                    item.section = section
                    newItem.push(structuredClone(item));
                }
                set((state) => ({ order: [...state.order, newItem], cart: [] }));
            }
        })
    },
}))

export const useEventStore = create((set) => ({
    eventItems: [],
    getEvents: () => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then((response) => {
                set(() => ({ eventItems: response.data.events }))
            })
            .catch(error => console.log(error))
    }
}))

const generateSection = () => {
    const validSections = ['A', 'B', 'C', 'D', 'E', 'F']
    return validSections[(Math.floor(Math.random() * validSections.length))];
}

const generateSeat = () => {
    return Math.floor(Math.random() * 250);
}

const generateTicketNmbr = () => {
    const validLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let ticketNmbr = ''
    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            const randomLetter = validLetters[(Math.floor(Math.random() * validLetters.length))];
            ticketNmbr += randomLetter
        } else {
            const randomNmbr = Math.floor(Math.random() * 9);
            ticketNmbr += randomNmbr
        }
    }
    return ticketNmbr
}

export const splitDate = (setDay, setMonth, orderItem) => {
    const splitSting = orderItem.when.date.split(' ')
    setDay(splitSting[0])
    setMonth(splitSting[1].substring(0, 3))
}