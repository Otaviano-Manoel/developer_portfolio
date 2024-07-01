import React from 'react';
import Link from '../link/link';
import styled from './projects.module.scss';
import classNames from 'classnames';

interface Technology {
    name: string,
    technologyUsad: string
}

const technologys: Technology[] = [
    { name: 'DESIGN PORTFOLIO', technologyUsad: 'html css' },
    { name: 'E-LEARNING LANDING PAGE', technologyUsad: 'html css' },
    { name: 'TODO WEB APP', technologyUsad: 'html css JAVASCRIPT' },
    { name: 'ENTERTAINMENT WEB APP', technologyUsad: 'html css JAVASCRIPT' },
    { name: 'MEMORY GAME', technologyUsad: 'html css JAVASCRIPT' },
    { name: 'ART GALLERY SHOWCASE', technologyUsad: 'html css JAVASCRIPT' },
];

function Projects() {
    return (
        <section className={styled['projects']}>
            <div className={styled['container']}>
                <h2 className={styled['title']}>Projects</h2>
                <Link data-testid='contact' text='Contact me' url='' />
            </div>
            <div className={styled['grid']}>
                {technologys.map((e, i) => (
                    <div key={i} className={styled['project']}>
                        <div
                            className={classNames(styled['img'], styled['screenshot' + i])}>
                            <div className={styled['actions']}>
                                <Link text='view project' url='' />
                                <Link text='view code' url='' />
                            </div>
                        </div>
                        <h4 className={styled['name']}>{e.name}</h4>
                        <p className={styled['technologyUsad']}>{e.technologyUsad}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Projects;