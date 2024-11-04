import axios from "axios";
import { Issue, NewIssue, IssueStatus } from "../types";

const API_URL = "http://localhost:3001/api";

export const fetchIssues = async (): Promise<Issue[]> => {
  try {
    const response = await axios.get<Issue[]>(`${API_URL}/issues`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch issues.");
  }
};

export const deleteIssue = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/issues/${id}`);
  } catch (error) {
    throw new Error("Failed to delete issue.");
  }
};

export const createIssue = async (newIssue: NewIssue): Promise<Issue> => {
  try {
    const response = await axios.post<Issue>(`${API_URL}/issues`, newIssue);
    return response.data;
  } catch (error) {
    throw new Error("Failed to create issue.");
  }
};

export const updateIssueStatus = async (
  id: string,
  status: IssueStatus
): Promise<Issue> => {
  try {
    const response = await axios.put<Issue>(`${API_URL}/issues/${id}`, {
      status,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update issue status.");
  }
};