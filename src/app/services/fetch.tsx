"use client";

import axios from "axios";

export default async function getAllEvents() {
//
  const baseUrl =
    "https://www.doglifedrawing.com";
  return axios
    .get(`${baseUrl}/api/events`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    })
}

