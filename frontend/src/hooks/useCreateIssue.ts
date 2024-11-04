import { useState } from "react";
import { createIssue } from "../services/api";
import { NewIssue, Issue } from "../types";

export const useCreateIssue = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const addIssue = async (newIssue: NewIssue): Promise<Issue | null> => {
    setLoading(true);
    setError(null);
    try {
      const createdIssue = await createIssue(newIssue);
      return createdIssue;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { addIssue, loading, error };
};
