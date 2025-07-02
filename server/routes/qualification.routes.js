import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
import authCtrl from "../controllers/auth.controller.js";  // If authentication is needed
const router = express.Router();

// Route: Add a new qualification
router.route("/api/qualifications").post(qualificationCtrl.create);

// Route: Get all qualifications
router.route("/api/qualifications").get(qualificationCtrl.list);

// Route: Get, update, delete a specific qualification by ID
router
    .route("/api/qualifications/:qualificationId")
    .get(qualificationCtrl.read)  // Get a specific qualification
    .put(qualificationCtrl.update)  // Update a specific qualification
    .delete(qualificationCtrl.remove);  // Delete a specific qualification

// Param: Handle 'qualificationId' parameter
router.param("qualificationId", qualificationCtrl.qualificationByID);
router.route("/api/qualifications").delete(qualificationCtrl.removeAll);
export default router;
