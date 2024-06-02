import React from "react";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useEventStore } from "./Store.js";

// Components 
//import GlobalStyles from "./components/styles/Global";

// Pages
import HomePage from "./pages/Homepage";
import EventPage from './pages/EventPage';
import OrderPage from './pages/orderPage';
import SingleEventPage from './pages/SingleEventPage';
import TicketPage from './pages/TicketPage';

function App() {

    const getEvents = useEventStore((state) => state.getEvents)

    useEffect(() => {
        getEvents()
    }, [])

    const theme = {
        colors: {
            bg: 'rgb(35, 31, 66)',
            accentBlue: 'rgb(55, 164, 171)',
            accentPink: 'rgb(245, 107, 154)',
        },
        fonts: {
            sansita: 'Sansita One',
            fira: '"Fira Sans", sans-serif',
            barCode: '"Libre Barcode 128", system-ui',
        },
    }

    return (
        <ThemeProvider theme={theme}>
            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/events/:id" element={<SingleEventPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/tickets" element={<TicketPage />} />
            </Routes>
        </ThemeProvider>
    )
}

export default App