import React from 'react';
import styled from './technology.module.scss';

interface TechnologyInfo {
    name: string,
    year: number
}

const technologys: TechnologyInfo[] = [
    { name: 'HTML', year: 4 },
    { name: 'CSS', year: 4 },
    { name: 'Javascript', year: 4 },
    { name: 'Accessibility', year: 4 },
    { name: 'React', year: 3 },
    { name: 'Sass', year: 3 },
]

function Technology() {
    return (
        <section className={styled['technology']}>
            {technologys.map((e) => (
                <div data-testid='container' className={styled['container']}>
                    <h2 className={styled['name']}>{e.name}</h2>
                    <p className={styled['experience']}>{e.year} Years experience</p>
                </div>
            ))}
        </section>
    );
}

export default Technology;