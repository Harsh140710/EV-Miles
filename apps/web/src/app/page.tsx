"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [apiResponse, setApiResponse] = useState("Loading...");

  useEffect(() => {
    const fetchApiResponse = async () => {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_SERVER_URL as string,
      );

      setApiResponse(response.data.message ?? "Unknown response");
    };

    fetchApiResponse();
  }, []);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">Health Check : {apiResponse}</h2>
        </section>
      </div>
    </div>
  );
}
