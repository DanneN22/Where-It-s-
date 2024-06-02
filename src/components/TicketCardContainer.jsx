import React from 'react'
import { StyledTicketCardContainer } from '../Styled/styled/TicketCardContainer.styled'

// Swiper 
import { Swiper, SwiperSlide, } from 'Swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Components 
import TicketCard from './TicketCard';

export default function TicketCardContainer({ orderItem }) {
    return (
        <StyledTicketCardContainer>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {
                    orderItem.map((item) => {
                        return <SwiperSlide key={item.ticketNmbr}><TicketCard orderItem={item} /> </SwiperSlide>
                    })
                }
            </Swiper >
        </StyledTicketCardContainer>
    )
}