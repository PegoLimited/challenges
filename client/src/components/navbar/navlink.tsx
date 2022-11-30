import { forwardRef } from "react";
import { NavLink as Link } from "react-router-dom";

// eslint-disable-next-line react/display-name, @typescript-eslint/no-explicit-any
export const NavLink = forwardRef(({ href, children, ...rest }: any, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));
