import { NextResponse, type NextRequest} from "next/server";

// export function middleware(req: NextRequest) {
//   return NextResponse.redirect(new URL("/", req.url))
// }

// export const config = {
//   matcher: "/profile",
// }

// export function middleware(req: NextRequest) {
//   if(req.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/time", req.url))
//   }
// }

// export function middleware(req: NextRequest) {
//   if (req.nextUrl.pathname === "/profile") {
//     // redirects to the new page but keeps the original url displayed
//     return NextResponse.rewrite(new URL("/time", req.url));
//   }
// }

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const themePreference = req.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  };

  response.headers.set("custom-header", "custom-value");

  return response;

}