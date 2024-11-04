import { Request, Response } from "express";
import { IssueService } from "../services/issueService";
import { validationResult } from "express-validator";
import { IssuePriority, IssueStatus } from "../models/issue";

// Create a new issue
export const createIssue = (req: Request, res: Response): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { title, description, priority } = req.body;

  try {
    const newIssue = IssueService.createIssue(
      title,
      description,
      priority as IssuePriority
    );
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(500).json({ message: "Failed to create issue." });
  }
};

// Get all issues
export const getAllIssues = (req: Request, res: Response): void => {
  try {
    const issues = IssueService.getAllIssues();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch issues." });
  }
};

// Get issue details
export const getIssueById = (req: Request, res: Response): void => {
  const { id } = req.params;

  try {
    const issue = IssueService.getIssueById(id);
    if (!issue) {
      res.status(404).json({ message: "Issue not found." });
      return;
    }
    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch issue." });
  }
};

// Update issue status
export const updateIssueStatus = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { status } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  try {
    const updatedIssue = IssueService.updateIssueStatus(
      id,
      status as IssueStatus
    );
    if (!updatedIssue) {
      res.status(404).json({ message: "Issue not found." });
      return;
    }
    res.json(updatedIssue);
  } catch (error) {
    res.status(500).json({ message: "Failed to update issue." });
  }
};

// Delete an issue
export const deleteIssue = (req: Request, res: Response): void => {
  const { id } = req.params;

  try {
    const success = IssueService.deleteIssue(id);
    if (!success) {
      res.status(404).json({ message: "Issue not found." });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Failed to delete issue." });
  }
};
