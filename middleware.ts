import { NextResponse } from "next/server";
import { auth } from "./auth";
import { isUserAdmin } from "./lib/utils/session";

export default auth((req) => {
  const auth = req.auth;
  if (!auth) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/api/note") && req.method != "GET") {
    return isAdminHandler(auth.user?.role || "");
  }
});

const isAdminHandler = (role: string) => {
  const isAdmin = isUserAdmin(role);
  if (!isAdmin) {
    return NextResponse.json(
      { success: false, message: "authentication failed" },
      { status: 401 }
    );
  }
};

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/api/note/1", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
