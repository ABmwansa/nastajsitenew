import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  return (
    <div className="internship-container">
      <h1 className="internship-heading">Internship Opportunities</h1>
      <p className="internship-intro">
        We are always looking to empower students and recent graduates through hands-on learning experiences.
        Explore current internship opportunities and take your first step into the industry with Nas-taj!
      </p>

      <div className="internship-list">
        <div className="internship-card">
          <h3>Civil Engineering Intern</h3>
          <p>
            Assist in site inspections, project planning, and supervision of construction activities under the guidance of experienced engineers.
          </p>
          <p><strong>Location:</strong> Lusaka / Kitwe</p>
          <p><strong>Duration:</strong> 3 months</p>
           <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="internship-card">
          <h3>Architecture & Design Intern</h3>
          <p>
            Work on conceptual designs, renderings, and technical drawings in support of ongoing building and infrastructure projects.
          </p>
          <p><strong>Location:</strong> Lusaka</p>
          <p><strong>Duration:</strong> 6 months</p>
           <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn">Apply Now</button>
        </div>

        <div className="internship-card">
          <h3>Environmental Engineering Intern</h3>
          <p>
            Contribute to research and analysis in environmental impact assessments, water treatment, and sustainable project practices.
          </p>
          <p><strong>Location:</strong> Ndola</p>
          <p><strong>Duration:</strong> 3 months</p>
           <p><strong>Status:</strong> Not Available</p>
          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Internships;
