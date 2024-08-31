import React from 'react';
import { Helmet } from 'react-helmet-async';

type TitleProps = {
    title?: string,
    description?: string,
    icon?: string,
};

const Title: React.FC<TitleProps> = ({ title = "ChitChat", description = "This is ChitChat.com", icon = "/chat-icon.svg" }) => {

    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <link rel="icon" href={icon} type="image/x-icon" />
        </Helmet>
    )
}
export default Title;