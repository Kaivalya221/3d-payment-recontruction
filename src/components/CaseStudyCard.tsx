import React from 'react';

interface CaseStudyCardProps {
    title: string;
    description: string;
    link: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, link }) => {
    return (
        <div className="case-study-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="case-study-link">Read More</a>
        </div>
    );
};

export default CaseStudyCard;