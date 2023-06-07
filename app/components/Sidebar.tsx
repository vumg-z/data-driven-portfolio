import React from 'react';
import Card from "./Card"

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar-container text-white text-center p-5 space-y-4">
            <h2 className="text-3xl font-extralight">Victor Mendoza</h2>
            <p className="font-regular">+52 33-21-30-37-83</p>
            <p>victormendoza@verlo.co</p>
            <img src="/github-icon.svg" alt="githubicon" className="mx-auto" />
            <p>Front-end developer specialized in interactive websites, data analysis, visualization, and team leadership.</p>

            <div className="flex items-center justify-center space-x-2">
                <img src="/elipse.svg" alt="elipse" className="mr-3" />
                <h2 className="text-2xl">Experience</h2>
            </div>

            <Card subtitle="Developer at" title="CREARED" footer="2022 - present" />
            <Card subtitle="Developer at" title="LYBWEB" footer="2022 - 2023" />

            <div className="flex items-center justify-center space-x-2">
                <img src="/elipse.svg" alt="elipse" className="mr-3" />
                <h2 className="text-2xl">Education</h2>
            </div>

            <Card subtitle="Software Development at" title="CETI COLOMOS" footer="2019 - present" />

        </div>
    );
};

export default Sidebar;
