import { useState } from "react";
import { deleteIssue } from "../services/api";

export const useDeleteIssue = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removeIssue = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await deleteIssue(id);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { removeIssue, loading, error };
};
