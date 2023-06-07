import React from 'react';

interface CardProps {
  subtitle: string;
  title: string;
  footer: string;
}

const Card: React.FC<CardProps> = ({ subtitle, title, footer }) => {
  return (
    <div className="bg-black text-white border border-white rounded-lg p-5 m-5">
      <div className="flex justify-between">
        <p className="mb-4 ml-2">{subtitle}</p>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="text-right mt-4">
        {footer}
      </div>
    </div>
  );
};

export default Card;
