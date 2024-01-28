import { authMiddleware } from "@clerk/nextjs";
 export default authMiddleware({
    publicRoutes:['/','/api/(.*)','/f/(.*)']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
