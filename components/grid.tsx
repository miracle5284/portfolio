import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {gridItems} from "@/data";

export const Grid = () => {

    const styles = gridItems.map(grids => grids.style)
    console.log(1235, styles)
    const getStyle = (index: number): string => {
        if (index === 0) {
            return 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]';
        } else if (index === 1) {
            return 'lg:col-span-2 md:col-span-3 md:row-span-2';
        } else if (index === 2) {
            return 'lg:col-span-2 md:col-span-3 md:row-span-2';
        } else if (index === 3) {
            return 'lg:col-span-2 md:col-span-3 md:row-span-1';
        } else if (index === 4) {
            return 'md:col-span-3 md:row-span-2';
        } else if (index === 5) {
            return 'lg:col-span-2 md:col-span-3 md:row-span-1';
        } else {
            // Default style or empty if index is out of range
            return '';
        }
    };
    return (
        <section id="about">
            <BentoGrid>
                {/*className="max-w-12xl mx-auto md:auto-rows-[20rem]">*/}
                {gridItems.map((item, idx) => {
                    return (
                        <BentoGridItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            itemClass={getStyle(idx)}
                            img={item.img}
                            imgClassName={item.imgClassName}
                            spareImg={item.spareImg}
                            titleClassName={item.titleClassName}
                        />
                    )
                })}
            </BentoGrid>
        </section>
    )
}
