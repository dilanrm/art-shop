import React from "react";

import { Topbar } from "./Topbar";
import { Middlebar } from "./Middlebar";
import { Navbar } from "./Navbar";

export const Header = ({ Logout }) => {
  return (
    <header class="header shop">
      {/* <!-- Topbar --> */}
      <Topbar Logout={Logout} />
      {/* <!-- End Topbar --> */}
      <Middlebar />
      {/* <!-- Header Inner --> */}
      <Navbar />
      {/* <!--/ End Header Inner --> */}
    </header>
  );
};
