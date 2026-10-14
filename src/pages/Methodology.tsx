import React from 'react';

const Methodology: React.FC = () => {
    return (
        <div className="methodology">
            <h1>Research Methodology</h1>
            <p>
                The methodology for 3D pavement reconstruction using smartphone videos involves several key steps:
            </p>
            <ol>
                <li>
                    <strong>Data Collection:</strong> 
                    Capturing high-quality video footage of the pavement using smartphones. The videos should be taken from various angles and distances to ensure comprehensive coverage.
                </li>
                <li>
                    <strong>Preprocessing:</strong> 
                    Preparing the video data for analysis, which includes stabilizing the footage, extracting frames, and enhancing image quality.
                </li>
                <li>
                    <strong>Structure-from-Motion (SfM):</strong> 
                    Utilizing SfM algorithms to reconstruct the 3D geometry of the pavement from the processed video frames. This involves feature detection, matching, and triangulation.
                </li>
                <li>
                    <strong>Point Cloud Generation:</strong> 
                    Creating a dense point cloud representation of the pavement surface, which serves as the basis for further analysis and modeling.
                </li>
                <li>
                    <strong>Model Refinement:</strong> 
                    Applying techniques such as mesh generation and texture mapping to enhance the visual quality and accuracy of the 3D model.
                </li>
                <li>
                    <strong>Validation:</strong> 
                    Comparing the reconstructed model with ground truth data to assess accuracy and reliability.
                </li>
            </ol>
            <p>
                This methodology not only facilitates accurate pavement reconstruction but also allows for the integration of additional data layers, such as material properties and structural assessments.
            </p>
        </div>
    );
};

export default Methodology;