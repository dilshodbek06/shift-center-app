import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: "ADMIN" | "TEACHER";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user/me"); // Example API endpoint
        setUser(data.user || null);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
