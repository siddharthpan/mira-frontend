import { useState } from 'react';
import axios from 'axios';

export default function Profile() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        skills: '',
        experience: '',
        resume_url: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const skillsArray = form.skills.split(',').map(skill => skill.trim());
        await axios.post('https://<your-railway-backend-url>/candidate/create', {
            ...form,
            skills: skillsArray,
            experience: Number(form.experience)
        });
        alert('Profile Created!');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Create Candidate Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} /><br />
                <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} /><br />
                <input type="text" name="resume_url" placeholder="Resume URL (optional)" onChange={handleChange} /><br />
                <button type="submit">Create Profile</button>
            </form>
        </div>
    );
}
