import React from 'react';

interface CardProps {
    title: string;
    body: string;
    children?: React.ReactNode;
    height?: string;
}

const BigCard: React.FC<CardProps> = ({ title, body, children, height }) => {
    const cardStyle = {
        height: height || 'auto' // Use custom height if provided, otherwise default to 'auto'
    };

    return (
        <div className="text-white border border-gray-300 rounded-lg p-5 m-5 text-white flex-shrink-0 w-3/12" style={cardStyle}>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-lg font-bold mb-4">{title}</h2>
                    <p className="mb-4 font-extralight">{body}</p>
                </div>
                <div className="mt-auto">
                    {React.Children.map(children, (child, i) => (
                        <div key={i} className="border border-gray-300 rounded-lg p-3 mb-4">{child}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BigCard;
