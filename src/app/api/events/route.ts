import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

const key = process.env.EVENTBRITE_API_KEY;

export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
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
  
  try {
    const response = await axios.get(eventsUrl, options);
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json({ message: error.message })
  }
    
}
