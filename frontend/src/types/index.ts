export type IssueStatus = "Open" | "In Progress" | "Resolved";
export type IssuePriority = "Low" | "Medium" | "High";

export interface Issue {
  id: string;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  createdAt: string;
  updatedAt: string;
}

export interface NewIssue {
  title: string;
  description: string;
  priority: IssuePriority;
}