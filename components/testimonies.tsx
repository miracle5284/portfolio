import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/moving-cards";
import {testimonials, companies} from "@/data";


const Testimonials = () => {
    return (
        <div className="py-20" id="testimonial">
            <h1 className="heading">
                What They Say {' '}
                <span className="text-purple">About me</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed='slow'
                />
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map(company => (
                        <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
                            {company.img && <img src={company.img} alt={company.name}  className="md:w-10 w-5"/>}
                            {company.nameImg && <img src={company.nameImg} alt={company.name}  className="md:w-24 w-20"/> }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials