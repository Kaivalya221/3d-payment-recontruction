import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';

const caseStudies = [
    {
        title: 'Urban Pavement Reconstruction',
        description: 'A detailed analysis of urban pavement reconstruction using smartphone videos, focusing on the challenges and solutions encountered.',
        link: '/case-studies/urban-pavement-reconstruction'
    },
    {
        title: 'Rural Road Assessment',
        description: 'This case study explores the application of structure-from-motion technology in assessing rural road conditions.',
        link: '/case-studies/rural-road-assessment'
    },
    {
        title: 'Highway Maintenance Optimization',
        description: 'An investigation into how 3D pavement reconstruction can optimize highway maintenance schedules and resource allocation.',
        link: '/case-studies/highway-maintenance-optimization'
    }
];

const CaseStudies: React.FC = () => {
    return (
        <div className="case-studies">
            <h1>Case Studies</h1>
            <p>Explore various case studies showcasing the application of 3D pavement reconstruction technology.</p>
            <div className="case-study-list">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard 
                        key={index} 
                        title={study.title} 
                        description={study.description} 
                        link={study.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;