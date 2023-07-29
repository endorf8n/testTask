import { NavLink } from "react-router-dom";

const routes = [
  { path: "/", text: "Home" },
  { path: "/tweets", text: "Tweets" },
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path}>{route.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
