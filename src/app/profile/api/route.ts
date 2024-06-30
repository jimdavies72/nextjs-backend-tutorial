import { type NextRequest } from "next/server";
import { headers, cookies} from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log("RH: ", requestHeaders.get("Authorization"));
  // or
  const headerList = headers();
  console.log("HL: ", headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("theme: ", theme);
  // or
  cookies().set("resultsPerPage", "20");
  console.log("rPP: ",cookies().get("resultsPerPage"));
  

  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });

}