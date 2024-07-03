import React from 'react';
import styled from './hero.module.scss';
import Link from '../link/link';

function Hero() {
    return (
        <header className={styled['header']}>
            <div className={styled['about-me']}>
                <h1 className={styled['presentation']}>Nice to meet you! <span className={styled['name']}>I’m <span className={styled['underline']}>Adam Keyes.</span></span></h1>
                <p data-testid='description' className={styled['description']}>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
                <Link data-testid='contact' text='Contact me' url='' />
            </div>
            <div data-testid='image' className={styled['img']}>
                <div className={styled['ad']}></div>
            </div>
        </header>
    );
}

export default Hero;