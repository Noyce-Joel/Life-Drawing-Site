import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ResponseData = {
  message: string;
};

const key = process.env.EVENTBRITE_API_KEY;

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const organisation_id =  2017829680413;
  const eventsUrl = `https://www.eventbriteapi.com/v3/organizations/${organisation_id}/events/`;

  const headerParameters = {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
  const options = {
    method: "GET",
    headers: headerParameters,
  };
  
    const response = await axios.get(eventsUrl, options)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
    
}
