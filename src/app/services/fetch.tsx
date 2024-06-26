"use client";

import axios from "axios";

export default function getAllEvents() {

  const baseUrl =
    "https://doglifedrawing.com" || process.env.NEXT_PUBLIC_VERCEL_URL;
  return axios
    .get(`${baseUrl}/api/events`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    })
}

