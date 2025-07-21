import React, { useState, useEffect } from 'react';

export default function Project() {
    const [formData, setFormData] = useState({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
    });

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        try {
            const res = await fetch('/api/projects');
            const data = await res.json();
            setProjects(data);
        } catch (err) {
            console.error('Error fetching:', err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Project submitted successfully.');
                fetchProjects();
                setFormData({
                    title: '',
                    firstname: '',
                    lastname: '',
                    email: '',
                    completion: '',
                    description: ''
                });
            } else {
                const errData = await response.json();
                alert('Error: ' + (errData.error || 'Something went wrong.'));
            }
        } catch (error) {
            console.error('Submit error:', error);
            alert('Failed to submit. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Projects</h2>

            <form onSubmit={handleSubmitForm}>
                <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                <input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                <input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="completion" type="date" value={formData.completion} onChange={handleChange} required />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />

                <button type="submit">Submit</button>
            </form>

            <hr />

            <h3>All Projects</h3>
            <ul>
                {projects.map((q) => (
                    <li key={q._id}>
                        <strong>{q.title}</strong> - {q.firstname} {q.lastname} ({q.email})<br />
                        Completed on: {new Date(q.completion).toLocaleDateString()}<br />
                        {q.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}
