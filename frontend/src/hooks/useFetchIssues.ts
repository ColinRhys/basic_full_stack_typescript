import { useState, useEffect } from "react";
import { fetchIssues } from "../services/api";
import { Issue } from "../types";

export const useFetchIssues = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadIssues = async () => {
      try {
        const data = await fetchIssues();
        setIssues(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadIssues();
  }, []);

  return { issues, loading, error };
};
