import React from 'react';
import directorImg from '../assets/director1.jpg';
import mwango from '../assets/Mwango.jpg';
import shikabonga from '../assets/shikabonga.jpg';
import kochelani from '../assets/kochelani.jpg';
// import directorImg from '../assets/director1.jpg';
import none from '../assets/none.jpg';
import supervisorImg from '../assets/supervisor.jpg';
import managerImg from '../assets/generalManager.jpg';
import logo from '../assets/logo.jpg';
import '../styles/OurTeam.css';

const OurTeam = () => {
  return (
    <div className="our-team">
      <header className="team-header">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>Meet Our Team</h1>
        <p>Our strength lies in experienced professionals leading with vision and excellence.</p>
      </header>

      {/* Leadership Section */}
      <section>
        <h2 className="section-title">Leadership</h2>
        <div className="team-grid">
          <div className="team-grid">
  {/* Director Strategic Planning / CEO */}
  <div className="team-card">
    <img src={directorImg} alt="Director Strategic Planning / CEO" />
    <h3>Eng. Nahum Stackson Jere</h3>
    <p className="role">Director – Strategic Planning / CEO</p>
    <p>
      MSc Geotechnical Engineering & Foundations (Structuralia, Madrid),<br />
      MEng Construction Management (UNZA),<br />
      BEng Civil & Environmental Engineering (UNZA)
    </p>
    <p>
      Eng. Jere is a seasoned geotechnical investigator with over 15 years of experience in infrastructure and the built environment. 
      He has led key civil and structural works across roadworks, bridges, soil and borrow pit investigations, and Environmental & Social Impact Assessments.
    </p>
    <p>
      He is a professional member of EIZ, a registered engineer under EngRB, a MACEZ member, and currently pursuing an MEng in Structural Engineering at UNZA.
    </p>
  </div>
</div>

         <div className="team-card">
            <img src={mwango} alt="Director" />
  <h3>Mwango Mulambia</h3>
  <p className="role">Director – Social & Resettlement</p>
  <p>
    MSc (Environmental Change and International Development, University of Sheffield, UK),<br />
    BA (Development Studies, University of Zambia)
  </p>
  <p>
    Mwango has over 10 years of experience in environmental, social, and gender inclusion within working environments and community engagement. 
    She also brings over 4 years of experience in social development and humanitarian program management and implementation.
  </p>
  
</div>
        <div className="team-card">
  <img src={kochelani} alt="Director – Environmental & Scientific Integration" />
  <h3>Dr. Kochelani Saili</h3>
  <p className="role">Director – Environmental & Scientific Integration</p>
  <p>
    PhD Environmental Health (University of Pretoria),<br />
    MSc Ecology, BSc Biology (UNZA)
  </p>
  <p>
    Dr. Saili has over 13 years of experience as a consultant and researcher in environmental health, water quality monitoring, and insect vector analysis. 
    He contributed to the LWSSD resettlement under the Millennium Challenge Account-Zambia and lectures at Macha Training Institute.
  </p>
</div>
        <div className="team-card">
  <img src={shikabonga} alt="Director – Infrastructure Development" />
  <h3>Eng. Joseph Samson Shikabonga</h3>
  <p className="role">Director – Infrastructure Development</p>
  <p>
    MEng Industrial and Civil Engineering (Odessa State University, Ukraine)
  </p>
  <p>
    Eng. Shikabonga brings over 25 years of experience in the built environment, having worked on major public infrastructure projects in both Zambia and the UK. 
    His past roles include positions at the Ministry of Works and Supply and Mufulira Municipal Council.
  </p>
  <p>
    He is a Senior Lecturer in Structural Engineering at the University of Zambia and is currently pursuing a PhD in Structural Engineering.
  </p>
</div>
       <div className="team-card">
  <img src={none} alt="Mechanical / HVAC Expert" />
  <h3>Eng. Chakutali Hara</h3>
  <p className="role">Mechanical / HVAC Expert</p>
  <p>
    BEng Mechanical Engineering (University of Zambia)
  </p>
  <p>
    Eng. Hara has 10 years of experience in mechanical systems design, with a strong focus on Heating, Ventilation, and Air Conditioning (HVAC). 
    His project portfolio includes works for Poly Products Ltd, WARMA Regional Laboratory, and the UNZA Pharmacy Laboratory.
  </p>
</div>
      <div className="team-card">
  <img src={none} alt="Social Expert" />
  <h3>Bilhah Jere</h3>
  <p className="role">Social Expert</p>
  <p>
    BA Adult Education (University of Zambia)
  </p>
  <p>
    Bilhah has over 8 years of experience in the social sector, specializing in stakeholder engagement, social baseline surveys, and resettlement action plans. 
    She played a key role in the resettlement of over 7,000 project-affected persons under the Millennium Challenge Corporation's LWSSD Project.
  </p>
</div>




        </div>
      </section>

      {/* Admin Section */}
      <section>
        <h2 className="section-title">Administration</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={managerImg} alt="General Manager" />
            <h3>Ms Nsamwa Chaibela</h3>
            <p className="role">General Manager</p>
            <p>Expert in project execution and stakeholder coordination.</p>
            <p><strong>Qualifications:</strong><br />BSc Business Admin (UNZA)</p>
          </div>
          <div className="team-card">
  <img src={supervisorImg} alt="Senior Site Supervisor" />
  <h3>Mr. Amos Mwansa</h3>
  <p className="role"> Site Supervisor</p>
  <p>
    Oversees on-site activities, ensuring compliance with safety standards and effective execution of construction tasks.
  </p>
  <p>
    <strong>Qualifications:</strong><br />
    BSc Software Engineering,<br />
    Certificate in Project Management & Planning,<br />
    Certificate in Occupational Health and Safety<br />
    <em>(All from the University of Zambia)</em>
  </p>
</div>

        </div>
      </section>

      {/* Supervisors & Interns */}
      <section>
        <h2 className="section-title">Supervisors & Intern Architects</h2>
        <div className="team-grid">
          {[
            'Salifyanji',
            // 'Henshel Chongo',
            // 'Kalaluka Mubita',
            // 'Carine Ngabile',
            // 'Chembe Pomboloka',
            // 'Mybin',
            // 'Iforce Mwenda',
            // 'Abraham Nyambe'
          ].map((name, index) => (
            <div className="team-card" key={index}>
              <h3>{name}</h3>
              <p className="role">{index < 4 ? 'CAD Technician' : 'Supervisor'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Structure Summary */}
      <section className="structure">
        <h2 className="section-title">Company Management Structure</h2>
        <ul>
          <li><strong>Managing Director</strong> → Executive oversight</li>
          <li><strong>Project Managers</strong> → Planning & client coordination</li>
          <li><strong>Site Engineers</strong> → Technical implementation</li>
          <li><strong>Supervisors</strong> → Site management & safety</li>
          <li><strong>Support Staff</strong> → Procurement, logistics, admin</li>
        </ul>
      </section>
    </div>
  );
};

export default OurTeam;
