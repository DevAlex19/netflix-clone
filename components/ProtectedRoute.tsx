import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../assets/actions/actions";
import { initialStateType } from "../assets/reducers/mainSlice";
import { useAppDispatch } from "../assets/store/store";

function ProtectedRoute({ router, children }: any) {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { user: profile } = useSelector((state: initialStateType) => state);
  useEffect(() => {
    const user = localStorage.getItem("auth");
    if (user && !profile.name) {
      dispatch(getUser(user));
    }
  }, [pathname]);

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
