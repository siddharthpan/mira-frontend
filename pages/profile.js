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

    const [resumeFile, setResumeFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

    const uploadResume = async () => {
        if (!resumeFile) return null;

        const data = new FormData();
        data.append('file', resumeFile);
        data.append('upload_preset', 'mira_unsigned'); // your unsigned preset
        data.append('folder', 'resumes');

        setUploading(true);
        try {
            const res = await axios.post(
                'https://api.cloudinary.com/v1_1/dkvmuzody/auto/upload',
                data
            );
            return res.data.secure_url;
        } catch (err) {
            console.error('Upload failed:', err);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resume_url = await uploadResume();

        if (!resume_url) {
            alert('Failed to upload resume.');
            return;
        }

        const skillsArray = form.skills.split(',').map((s) => s.trim());
        await axios.post('https://mira-backend-production.up.railway.app/candidate/create', {
            ...form,
            resume_url,
            skills: skillsArray,
            experience: Number(form.experience),
        });

        alert('Candidate profile created successfully!');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Create Candidate Profile</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
                <input type="text" name="skills" placeholder="Skills (comma separated)" onChange={handleChange} /><br />
                <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} /><br />
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} /><br />
                <button type="submit" disabled={uploading}>
                    {uploading ? "Uploading..." : "Create Profile"}
                </button>
            </form>
        </div>
    );
}
