import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navlinks = links.map((link) => {
    return <a key={link} href={"#" + link} >{link}</a>
  })

  return <nav>{navlinks}</nav>;
}

export default NavBar;
