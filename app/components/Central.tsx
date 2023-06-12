import React from 'react';
import BigCard from "./BigCard"
import Graph1 from "./Graph1"
import Graph2 from "./Graph2"
import Graph3 from "./Graph3"

const BigCardList: React.FC = () => {
    return (
        <div className="flex space-x-4 overflow-x-scroll p-5 font-plex-mono">

            <BigCard
                title="Data Visualization"
                body="In today's era of AI and advanced technologies, leveraging data visualization becomes crucial in delivering exceptional value to clients. Harnessing the power of data through visualization enables us to unlock actionable insights and drive impactful outcomes. Let me help you stand out by showcasing your expertise in data visualization and its transformative impact on client success.">
                <Graph2 />
            </BigCard>

            <BigCard
                title="Geocentric Data"
                body="In today's digital landscape, the effective visualization of geocentric data holds immense potential for delivering significant value to clients. By leveraging interactive maps and spatial analysis, we can unlock valuable insights, drive informed decision-making, and provide impactful solutions. Let me help you showcase your expertise in geocentric data visualization, demonstrating how it can create a competitive advantage for your clients and position you as a valuable asset in the industry.">
                <Graph3 />
            </BigCard>

            <BigCard
                title="Simulation"
                body='The realm of simulation opens up a world of possibilities for tackling complex physics and intricate phenomena. By harnessing advanced computational models, we can create realistic simulations that enable us to understand, predict, and optimize intricate systems. Let me help you highlight your expertise in simulation, showcasing your ability to simulate and analyze complex scenarios to drive innovation and solve real-world challenges. Together, we can demonstrate the power of simulation in pushing boundaries and achieving remarkable outcomes.'>
            </BigCard>


        </div>
    );
};

export default BigCardList;
