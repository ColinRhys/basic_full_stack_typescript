import { Issue, IssueStatus, IssuePriority } from "../models/issue";
import { v4 as uuidv4 } from "uuid";

let issues: Issue[] = []; // Our in memory data storage for the issues

export class IssueService {
  // Create a new issue
  static createIssue(
    title: string,
    description: string,
    priority: IssuePriority
  ): Issue {
    const newIssue: Issue = {
      id: uuidv4(),
      title,
      description,
      status: "Open",
      priority,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    issues.push(newIssue);
    return newIssue;
  }

  // Get all issues
  static getAllIssues(): Issue[] {
    return issues;
  }

  // Get issue by ID
  static getIssueById(id: string): Issue | undefined {
    return issues.find((issue) => issue.id === id);
  }

  // Update issue status
  static updateIssueStatus(id: string, status: IssueStatus): Issue | undefined {
    const issue = issues.find((issue) => issue.id === id);
    if (issue) {
      issue.status = status;
      issue.updatedAt = new Date();
    }
    return issue;
  }

  // Delete an issue
  static deleteIssue(id: string): boolean {
    const index = issues.findIndex((issue) => issue.id === id);
    if (index !== -1) {
      issues.splice(index, 1);
      return true;
    }
    return false;
  }
}
