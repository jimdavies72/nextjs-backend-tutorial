
// forces no caching of a GET request
exports.dynamic = "force-dynamic";
import { NextRequest } from "next/server";

exports.GET = async (
  //req: Request <- would also force no caching
) => {
  return Response.json({
    time: new Date().toLocaleTimeString()
  });
};

// using any other method would force no caching