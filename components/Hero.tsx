import React from 'react'
import { Spotlight } from "@/components/ui/spotlight-new";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import {BorderMagicButton} from "@/components/ui/buttons/BorderMagicButton";
import {FaLocationArrow} from "react-icons/fa";

const Hero = () => {

    return (
        <div className="pb-20 pt-36">
            <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight xOffset={200}/>
                {/*<Spotlight gradientFirst="radial-gradient(*/}
                {/*      68.54% 68.72% at 55.02% 31.46%,*/}
                {/*      hsla(210, 100%, 85%, 0.12) 0%,*/}
                {/*      hsla(210, 100%, 55%, 0.04) 50%,*/}
                {/*      hsla(210, 100%, 45%, 0) 80%*/}
                {/*    )"*/}
                {/*    gradientSecond="radial-gradient(*/}
                {/*      50% 50% at 50% 50%,*/}
                {/*      hsla(210, 100%, 85%, 0.12) 0%,*/}
                {/*      hsla(210, 100%, 55%, 0.04) 80%,*/}
                {/*      transparent 100%*/}
                {/*    )"*/}
                {/*                       translateY={-350} width={620} height={1380} xOffset={200}/>*/}
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            <div className="flex justify-center relative -top-10 my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Magic with Next.js
                    </h2>
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider lg:tracking-widest mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Miracle, a Full-Stack AI Engineer.
                    </p>
                    <a href="#about">
                        <BorderMagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>

            </div>

        </div>
    )
}
export default Hero
