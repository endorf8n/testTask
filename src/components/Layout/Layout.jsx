import { Suspense } from "react";
import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { HeaderStyled } from "./layout.styled";

export const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Navigation />
      </HeaderStyled>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
