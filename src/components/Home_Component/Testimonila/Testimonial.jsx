import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = ()=>{
    const [review, setReview] = useState([]);
     const [rating, setRating] = useState(0)
    useEffect(()=>{
        fetch('review.json')
        .then(res=> res.json())
        .then(data=> setReview(data))
    },[])
    return(
        <section className="py-[80px]  ">
        <div className="max-w-[1260px] w-full mx-auto">
                <div className="flex flex-col gap-[40px]">
                     <div className="text-center text-black max-w-[500px] w-full mx-auto flex flex-col gap-[8px]">
                    <h3 className="text-[20px] leading-[28px] 
                    text-warning font-semibold">Client Say</h3>
                    <h2 className="text-[32px] leading-[36px] font-bold">Our Happy Customer</h2>
                </div>
                <div className="max-w-[1360px] w-full mx-auto">
                       <Swiper navigation={true} 
                    modules={[Navigation]} 
                    className="mySwiper">           
                             {
                          review.map(reviews=> <SwiperSlide key={reviews._id}>
                            <div className="px-[70px] text-center my-[60px] flex justify-center items-center flex-col gap-[20px]">
                                <Rating style={{ maxWidth: 150 }} className="text-center" value={reviews.rating} onChange={setRating} />
                                <h4 className="text-[24px] font-bold text-base-300">{reviews.name}</h4>
                                <p className="text-base-100">{reviews.details}</p>
                            </div>
                          </SwiperSlide>)
                        }
                       
                    </Swiper>
                </div>
                 
                </div>
            </div>
        </section> 

    )
}

export default Testimonial;