import React from 'react';
import styled from './technology.module.scss';

function Technology() {

    const addTechnology = (name: string, years: number): JSX.Element => {
        return (
            <div data-testid='container' className={styled['container']}>
                <h2 className={styled['name']}>{name}</h2>
                <p className={styled['experience']}>{years} Years experience</p>
            </div>
        )
    }
    return (
        <section className={styled['technology']}>
            {addTechnology('HTLM', 4)}
            {addTechnology('CSS', 4)}
            {addTechnology('Javascript', 4)}
            {addTechnology('Accessibility', 4)}
            {addTechnology('React', 3)}
            {addTechnology('Sass', 3)}
        </section>
    );
}

export default Technology;