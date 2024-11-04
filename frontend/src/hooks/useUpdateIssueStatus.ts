import { useState } from "react";
import { updateIssueStatus } from "../services/api";
import { IssueStatus, Issue } from "../types";

export const useUpdateIssueStatus = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const changeIssueStatus = async (
    id: string,
    status: IssueStatus
  ): Promise<Issue | null> => {
    setLoading(true);
    setError(null);
    try {
      const updatedIssue = await updateIssueStatus(id, status);
      return updatedIssue;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { changeIssueStatus, loading, error };
};
