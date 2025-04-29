import { useState } from 'react';
import axios from 'axios';

export default function Jobs() {
    const [skill, setSkill] = useState('');
    const [jobs, setJobs] = useState([]);

    const searchJobs = async () => {
        const res = await axios.get(`https://mira-backend-production.up.railway.app/job/search?skill=${skill}`);
        setJobs(res.data);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Search Jobs</h2>
            <input type="text" placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
            <button onClick={searchJobs}>Search</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
