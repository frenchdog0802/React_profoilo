import e from "express";
import Qualification from "../models/qualification.model.js";  // Assuming you have a Qualification model

// Create a new qualification
export const create = async (req, res) => {
    try {
        const qualification = new Qualification(req.body);
        await qualification.save();
        res.status(201).json(qualification);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// List all qualifications
export const list = async (req, res) => {
    try {
        const qualifications = await Qualification.find();
        res.status(200).json(qualifications);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific qualification by ID
export const read = async (req, res) => {
    try {
        res.status(200).json(req.qualification);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a qualification by ID
export const update = async (req, res) => {
    try {
        const qualification = await Qualification.findByIdAndUpdate(req.qualification._id, req.body, { new: true });
        res.status(200).json(qualification);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Remove a qualification by ID
export const remove = async (req, res) => {
    try {
        await req.qualification.deleteOne();
        res.status(200).json({ message: "Qualification deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Retrieve a qualification by ID and assign to req.qualification
export const qualificationByID = async (req, res, next, id) => {
    try {
        const qualification = await Qualification.findById(id);
        if (!qualification) {
            return res.status(404).json({ error: "Qualification not found" });
        }
        req.qualification = qualification;
        next();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const removeAll = async (req, res) => {
    try {
        await Qualification.deleteMany();
        res.status(200).json({ message: "All Qualification removed successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export default { create, list, read, update, remove, qualificationByID, removeAll };