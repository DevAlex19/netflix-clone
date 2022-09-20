function ProtectedRoute({ router, children }: any) {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("auth");
    const unprotectedRoutes = ["/", "/signin", "/signup"];

    const protectedRoute = unprotectedRoutes.indexOf(router.pathname) === -1;
    if (!user && protectedRoute) {
      router.push("/");
    }
  }
  return children;
}

export default ProtectedRoute;
