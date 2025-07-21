import React, { useEffect, useState } from 'react';
import auth from "../lib/auth-helper.js";
import { useLocation, Navigate, Link, useParams } from "react-router-dom";

export default function Education() {
    const [formData, setFormData] = useState({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
    });
    const [qualifications, setQualifications] = useState([]);
    const [user, setUser] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);
    const [redirectToSignin, setRedirectToSignin] = useState(false);
    const jwt = auth.isAuthenticated();
    const { userId } = useParams();

    // Load user info and check role
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(`/api/users/${userId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwt.token}`,
            },
            signal,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data && data.error) {
                    setRedirectToSignin(true);
                } else {
                    setUser(data);
                    setIsAdmin(data.role === 'admin');
                    sessionStorage.setItem('role', data.role); // optional
                }
            })
            .catch((err) => {
                console.error('Failed to fetch user:', err);
                setRedirectToSignin(true);
            });

        return () => abortController.abort();
    }, [userId]);

    // Load all qualifications
    const fetchQualifications = async () => {
        try {
            const res = await fetch('/api/qualifications');
            const data = await res.json();
            setQualifications(data);
        } catch (err) {
            console.error('Error fetching:', err);
        }
    };

    useEffect(() => {
        fetchQualifications();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/qualifications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Qualification submitted successfully.');
                fetchQualifications();
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

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this qualification?')) return;
        try {
            const res = await fetch(`/api/qualifications/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.ok) {
                fetchQualifications();
            } else {
                const err = await res.json();
                alert('Delete failed: ' + err.error);
            }
        } catch (err) {
            console.error('Delete error:', err);
            alert('Failed to delete');
        }
    };

    if (redirectToSignin) {
        return <p>Unauthorized. Redirecting to sign in...</p>;
    }

    return (
        <div>
            <h2>Education / Qualification</h2>

            {/* Admin-only form */}
            {isAdmin && (
                <form onSubmit={handleSubmitForm} style={{ marginBottom: '2rem' }}>
                    <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
                    <input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
                    <input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    <input name="completion" type="date" value={formData.completion} onChange={handleChange} required />
                    <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            )}

            <h3>All Qualifications</h3>
            <ul>
                {qualifications.map((q) => (
                    <li key={q._id}>
                        <strong>{q.title}</strong> - {q.firstname} {q.lastname} ({q.email})<br />
                        Completed on: {new Date(q.completion).toLocaleDateString()}<br />
                        {q.description && <em>{q.description}</em>}<br />
                        {isAdmin && (
                            <button onClick={() => handleDelete(q._id)}>Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
