import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";  // If authentication is needed
const router = express.Router();

// Route: Add a new project
router.route("/api/projects").post(projectCtrl.create);

// Route: Get all projects
router.route("/api/projects").get(projectCtrl.list);

// Route: Get, update, delete a specific project by ID
router
    .route("/api/projects/:projectId")
    .get(projectCtrl.read)  // Get a specific project
    .put(projectCtrl.update)  // Update a specific project
    .delete(projectCtrl.remove);  // Delete a specific project

// Param: Handle 'projectId' parameter
router.param("projectId", projectCtrl.projectByID);
router.route("/api/projects").delete(projectCtrl.removeAll);


export default router;
