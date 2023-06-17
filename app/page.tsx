import React from 'react';
import Sidebar from './components/Sidebar';
import Central from './components/Central';


const Page: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div id="nav" className="w-full bg-black h-12">
        {/* Contenido del espacio superior */}
      </div>
      <div className="flex flex-grow">
        <div className="w-3/12 bg-black border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="flex-1 bg-black overflow-x-hidden overflow-y-auto">
          <Central />
        </div>
      </div>
      <div id="footer" className="w-full bg-black h-12">
        {/* Contenido del espacio inferior */}
      </div>
    </div>
  );
};



export default Page;
