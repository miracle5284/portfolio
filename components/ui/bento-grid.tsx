'use client'

import { cn } from "@/lib/utils";
import React from "react";
import {BackgroundGradientAnimation} from "@/components/ui/background-gradient-animation";
import { Globe } from "../globe";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import {BorderMagicButton} from "@/components/ui/buttons/BorderMagicButton";
import {IoCopyOutline} from "react-icons/io5";

interface BentoGridItemProps {
    itemClass?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?:number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}

export const BentoGrid = ({
                              className,
                              children,
                          }: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  itemClass,
                                  title,
                                  description,
                                   id, img, imgClassName, titleClassName, spareImg
                              }: BentoGridItemProps) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        console.log('ccccilcked111111111111111111111111');
        navigator.clipboard.writeText('blueprime91@gmail.com').then(() => setCopied(true));
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input" +
                " dark:shadow-none dark:border-white/[0.1] bg-white border" +
                " justify-between flex flex-col space-y-4",
                itemClass
            )}

            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id===6 && "flex justify-center items-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')} />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id ===5 && "w-full opacity-80"}`}>
                    {spareImg && (
                        <img src={spareImg} alt={spareImg} className='object-cover, object-center w-full h-full' />
                    )}

                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation />
                )}


                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight md:max-w-50 text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>

                {id === 2 && (
                    <Globe />
                )}

                {id === 3 && (
                    <div className="flex gap-1.5 lg:gap-2 w-fit absolute right-3 lg:right-2 z">
                        <div className="flex flex-col gap-3 md:gap-2 lg:gap-4">
                            {['React.js', 'Next.js', 'TypeScript'].map(item => (
                                <span key={item} className="lg:py-2 lg:px-2 py-2 px-2 text-xs md:py-1.5 md:px-1.5 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center
                                bg-[#10132E]">
                                    {item}
                                </span>
                            ))}
                            <span className="lg:py-5 lg:px-3 py-4 px-3 md:py-3 md:px-2 rounded-lg text-center bg-[#10132e]" />

                        </div>

                        <div className="flex flex-col gap-3 md:gap-2 lg:gap-4">
                            <span className="lg:py-5 lg:px-3 py-4 px-3 rounded-lg  md:py-3 md:px-2 text-center bg-[#10132e]" />
                            {['React.js', 'Next.js', 'TypeScript'].map(item => (
                                <span key={item} className="lg:py-2 lg:px-2 py-2 px-2 text-xs md:py-1.5 md:px-1.5 lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center
                                bg-[#10132E]">
                                    {item}
                                </span>
                            ))}


                        </div>

                    </div>
                )}

                    {id === 6 && (
                        <div className="mt-5 relative z-9999">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{
                                    loop: copied,
                                    autoplay: copied,
                                    animationData,
                                    rendererSettings: {
                                        preserveAspectRatio: 'xMidYMid slice'
                                    }
                                }} />
                            </div>
                            <BorderMagicButton icon={<IoCopyOutline />} position='left'
                               title={copied ? 'Email copied!' : 'Copy my email'}
                                otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
                        </div>
                    )}
            </div>
            </div>
        </div>
    );
};
