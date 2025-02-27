'use client'

import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "@/app/style";
import {experiences} from "@/data";
import SectionWrapper from './hoc-wrappers/section-wrapper';

function WorkExperience() {
    return (
        <>
            <div>WorkExperience</div>
            <VerticalTimeline></VerticalTimeline></>
    )
}

export default WorkExperience
