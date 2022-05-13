import { useState, useEffect } from "react";

const NavItem = ({ children, className, href }) => {
  const varClass = className ? className : "";
  const varHref = href ? href : "";
  const [active, setActive] = useState(false);
  //   console.log(active, varHref);

  useEffect(() => {
    setActive(false);
  }, []);

  return (
    <li
      className={`border-b-2  border-transparent hover:border-b-primary transition  `}
      onClick={() => setActive(!active)}
    >
      <a
        href={`#${varHref}`}
        // className={`active:text-white ${
        //   active ? "text-white" : "text-gray-400"
        // }`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
