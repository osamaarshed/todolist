import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  const location = useLocation();
  let routes = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/form",
      title: "Form",
    },
    {
      to: "/landingpage",
      title: "LandingPage",
    },
  ];
  return (
    <div>
      {routes.map((route, index) => {
        return (
          <Fragment key={index}>
            {/* <div className="routes"> */}
            <Link
              className={location.pathname === route.to ? "active" : ""}
              to={route.to}
            >
              {route.title}
            </Link>

            <br />
            {/* </div> */}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Navigation;
