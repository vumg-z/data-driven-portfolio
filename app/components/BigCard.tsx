import React from 'react';

interface CardProps {
    title: string;
    body: string;
    children?: React.ReactNode;
}

const BigCard: React.FC<CardProps> = ({ title, body, children }) => {
    return (
        <div className="text-white border border-white rounded-lg p-5 m-5 text-white flex-shrink-0 w-96 flex flex-col justify-between">
            <div>
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <p className="mb-4 font-extralight">{body}</p>
            </div>
            <div className="mt-auto">
                {React.Children.map(children, (child, i) => (
                    <div key={i} className="border border-white rounded-lg p-3 mb-2">{child}</div>
                ))}
            </div>
        </div>
    );
};

export default BigCard;
