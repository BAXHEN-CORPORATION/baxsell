import { SendRequestBody } from "@baxsell/app/api/send-request/route";
import axios from "axios";
import React from "react";

export interface UseSendRequest {
  message: string;
}

export const useSendRequest = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<boolean>(false);
  const [data, setData] = React.useState<UseSendRequest | null>(null);

  const sendRequest = async (body: SendRequestBody) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post("/api/send-request", body);

      if (response.status === 200) {
        setData(response.data);
        setSuccess(true);
        return true;
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, success, sendRequest };
};
