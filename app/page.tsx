import React from 'react';
import Sidebar from './components/Sidebar';
import Central from './components/Central';


const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div id='nav' className="w-full bg-black h-12">
        {/* Contenido del espacio superior */}
      </div>
      <div className="flex flex-grow overflow-auto">
        <div className="w-1/3 bg-black overflow-auto border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="w-2/3 bg-black overflow-auto">
          <Central/>
        </div>
      </div>
      <div id='footer' className="w-full bg-black h-12">
        {/* Contenido del espacio inferior */}
      </div>
    </div>
  );
};

export default Page;
