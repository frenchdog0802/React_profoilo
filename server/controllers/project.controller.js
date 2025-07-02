import Project from "../models/project.model.js";  // Assuming you have a Project model

// Create a new project
export const create = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// List all projects
export const list = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get a specific project by ID
export const read = async (req, res) => {
    try {
        res.status(200).json(req.project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a project by ID
export const update = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.project._id, req.body, { new: true });
        res.status(200).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Remove a project by ID
export const remove = async (req, res) => {
    try {
        await req.project.deleteOne();
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Retrieve a project by ID and assign to req.project
export const projectByID = async (req, res, next, id) => {
    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        req.project = project;
        next();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const removeAll = async (req, res) => {
    try {
        await Project.deleteMany();
        res.status(200).json({ message: "All Project removed successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export default { create, list, read, update, remove, projectByID, removeAll };