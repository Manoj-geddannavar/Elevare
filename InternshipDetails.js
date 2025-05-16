import React from 'react';
import './InternshipDetails.css';

const InternshipDetails = () => {
    return (
        <div className="internship-details">
            <h1>Internship Opportunities</h1>
            <p>ELEVARE CONNECT SOLUTIONS LLP is offering exciting internship opportunities for enthusiastic and motivated individuals looking to gain hands-on experience in various domains. We are looking for interns who are eager to learn and contribute to our projects. If you are a proactive learner, we encourage you to apply.</p>
            <h2>Responsibilities:</h2>
            <ul>
                <li>Assist with Project Tasks: Support project teams with various tasks, including research, documentation, and coordination.</li>
                <li>Data Analysis: Collect and analyze data to support decision-making and project development.</li>
                <li>Content Creation: Help create content for presentations, reports, and other project materials.</li>
                <li>Learning & Development: Participate in training sessions and workshops to develop relevant skills.</li>
                <li>Team Collaboration: Work closely with team members to achieve project objectives.</li>
                <li>Stay Current: Keep abreast of industry trends and best practices related to your internship domain.</li>
            </ul>
            <h2>Qualifications:</h2>
            <ul>
                <li>Currently enrolled in a Bachelor's or Master's program in [Relevant field, e.g., Business Administration, Marketing, Engineering, or a related field].</li>
                <li>Strong communication and interpersonal skills.</li>
                <li>Eagerness to learn and take on new challenges.</li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>Ability to work independently and as part of a team.</li>
            </ul>
            <p className="apply-now">If you want to apply for this position, please send your resume to <a href="mailto:info@elevareconnectllp.org">info@elevareconnectllp.org</a></p>
        </div>
    );
};

export default InternshipDetails;
