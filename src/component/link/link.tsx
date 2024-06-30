import React from 'react';
import PropTypes from 'prop-types';
import styled from './link.module.scss';

interface LinkProps {
    text: string;
    url: string;
}

Link.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

function Link(props: LinkProps) {
    const { text, url } = props;


    return (
        <a data-testid='link' className={styled['link']} href={url}>
            {text}
        </a>
    );
}

export default Link;