import React from 'react';

const Tools: React.FC = () => {
    return (
        <div className="tools-page">
            <h1>Tools for 3D Pavement Reconstruction</h1>
            <p>This page lists and describes the various tools used for 3D reconstruction from smartphone videos.</p>
            <ul>
                <li>
                    <h2>Structure-from-Motion (SfM) Software</h2>
                    <p>Software that processes video frames to create a 3D model by analyzing the motion of the camera.</p>
                </li>
                <li>
                    <h2>Photogrammetry Tools</h2>
                    <p>Tools that convert photographs into 3D models, essential for accurate pavement reconstruction.</p>
                </li>
                <li>
                    <h2>Mobile Applications</h2>
                    <p>Smartphone apps that assist in capturing video and images for reconstruction purposes.</p>
                </li>
                <li>
                    <h2>Point Cloud Processing Software</h2>
                    <p>Software that processes point clouds generated from 3D models to refine and analyze pavement data.</p>
                </li>
                <li>
                    <h2>Data Visualization Tools</h2>
                    <p>Tools that help visualize the reconstructed 3D models and analyze pavement conditions.</p>
                </li>
            </ul>
        </div>
    );
};

export default Tools;