import React from 'react';

interface CardProps {
  subtitle: string;
  title: string;
  footer: string;
  subtitleStyle?: string;
  titleStyle?: string;
  footerStyle?: string;
}

const Card: React.FC<CardProps> = ({ 
  subtitle, 
  title, 
  footer, 
  subtitleStyle = '', 
  titleStyle = '', 
  footerStyle = '' 
}) => {
  return (
    <div className="bg-black text-white border border-white rounded-lg p-5 m-5">
      <div className="flex justify-between">
        <p className={`mb-4 ml-2 ${subtitleStyle}`}>{subtitle}</p>
        <h2 className={`text-lg font-bold ${titleStyle}`}>{title}</h2>
      </div>
      <div className={`text-right mt-4 ${footerStyle}`}>
        {footer}
      </div>
    </div>
  );
};

export default Card;
