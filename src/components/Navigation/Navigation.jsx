import { NavLinkStyled, NavListStyle } from "./navigation.styled";

const routes = [
  { path: "/", text: "Home" },
  { path: "/tweets", text: "Tweets" },
];

export const Navigation = () => {
  return (
    <nav>
      <NavListStyle>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLinkStyled to={route.path}>{route.text}</NavLinkStyled>
          </li>
        ))}
      </NavListStyle>
    </nav>
  );
};
