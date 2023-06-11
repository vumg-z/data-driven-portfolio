import React from 'react';


interface CardProps {
    title: string;
    body: string;
    children?: React.ReactNode;
}

const BigCard: React.FC<CardProps> = ({ title, body, children }) => {
    return (
        <div className="text-white border border-white rounded-lg p-5 m-5 text-white flex-shrink-0 w-96">
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <p className="mb-4">{body}</p>
            {children}
        </div>
    );
};

export default BigCard;
