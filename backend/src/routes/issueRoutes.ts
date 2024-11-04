import express from "express";
import {
  createIssue,
  getAllIssues,
  getIssueById,
  updateIssueStatus,
  deleteIssue,
} from "../controllers/issueController";
import { body } from "express-validator";

const router = express.Router();

// Create a new issue with validation
router.post(
  "/issues",
  [
    body("title").notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Description is required."),
    body("priority")
      .isIn(["Low", "Medium", "High"])
      .withMessage("Priority must be Low, Medium, or High."),
  ],
  createIssue
);

// Get all issues
router.get("/issues", getAllIssues);

// Get issue details
router.get("/issues/:id", getIssueById);

// Update issue status with validation
router.put(
  "/issues/:id",
  [
    body("status")
      .isIn(["Open", "In Progress", "Resolved"])
      .withMessage("Status must be Open, In Progress, or Resolved."),
  ],
  updateIssueStatus
);

// Delete an issue
router.delete("/issues/:id", deleteIssue);

export default router;
