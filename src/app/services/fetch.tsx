"use client";

import axios from "axios";

export default async function getAllEvents() {
  return axios
    .get(`/api/events`) // Relative URL
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
}


