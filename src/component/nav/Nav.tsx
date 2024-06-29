import React from 'react';
import styled from './Nav.module.scss';
import classNames from 'classnames';

function Nav() {
    return (
        <nav className={styled['nav']}>
            <h3 className={styled['name']}>adamkeyes</h3>
            <ul className={styled['media-social']}>
                <li>
                    <a data-testid='media-social' href="http://" target="_blank" rel="noopener noreferrer">
                        <div className={classNames(styled['media'], styled['github'])} />
                    </a>
                </li>
                <li>
                    <a data-testid='media-social' href="http://" target="_blank" rel="noopener noreferrer">
                        <div className={classNames(styled['media'], styled['frontendmentor'])} />
                    </a>
                </li>
                <li>
                    <a data-testid='media-social' href="http://" target="_blank" rel="noopener noreferrer">
                        <div className={classNames(styled['media'], styled['linkedin'])} />
                    </a>
                </li>
                <li>
                    <a data-testid='media-social' href="http://" target="_blank" rel="noopener noreferrer">
                        <div className={classNames(styled['media'], styled['twitter'])} />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;