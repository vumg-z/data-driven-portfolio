import React from 'react';
import Sidebar from './components/Sidebar';

const Page: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 bg-black overflow-auto">
        <Sidebar />
      </div>
      <div className="w-2/3 bg-gray-100 overflow-auto">
        {/* Contenido del espacio central */}
      </div>
      <div className="w-full bg-gray-300 h-12 fixed bottom-0">
        {/* Contenido del espacio inferior */}
      </div>
    </div>
  );
};

export default Page;
