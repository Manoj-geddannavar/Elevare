import React from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
    const jobCategories = [
        { id: 1, title: 'Trainer', description: 'Opportunities for professional trainers to help develop skills.', icon: '👨‍🏫', link: '/trainer' },
        { id: 2, title: 'Operations', description: 'Operational roles to ensure smooth and efficient workflows.', icon: '⚙️', link: '/operations' },
        { id: 3, title: 'Sales', description: 'Sales positions to drive growth and revenue.', icon: '💼', link: '/sales' },
        { id: 4, title: 'Internships/Projects', description: 'We offer internship opportunities and paid projects for students.', icon: '📚', link: '/internship' }, // Updated link
    ];

    return (  
        <div className="careers">
            <h1>Explore Careers: Where Innovation Meets Opportunity</h1>
            <div className="career-description">
                <p>At ELEVARE CONNECT SOLUTIONS LLP, we believe that a fulfilling career is built at the intersection of passion and innovation. Our diverse opportunities span across various fields, inviting individuals who are driven by curiosity and a desire to make a meaningful impact. Whether you're a seasoned professional or an ambitious student, we offer a dynamic environment where your talents can flourish.</p>
                <p>Join us to be part of a team that values creativity, collaboration, and continuous growth. From leading training sessions to optimizing operations, driving sales, and participating in impactful projects, your journey with us will be a blend of learning and achievement. With a commitment to excellence and a culture that nurtures innovation, we empower our employees to push boundaries and realize their full potential.</p>
                <p>Discover the roles we have on offer, and let's turn your career aspirations into reality. Together, we can create a brighter future, one opportunity at a time.</p>
            </div>
            <div className="job-categories">
                {jobCategories.map(category => (
                    <div key={category.id} className="job-category">
                        <span className="icon">{category.icon}</span>
                        <h2>{category.title}</h2>
                        <p>{category.description}</p>
                        {category.link && <Link to={category.link} className="learn-more">Learn More</Link>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Careers;
