import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavSearchBar } from "./NavSearchBar";
import { NavSearchForm } from "./NavSearchForm";
import { ShoppingMenu } from "./ShoppingMenu";

export const Middlebar = () => {
  return (
    <div class="middle-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-12">
            {/* <!-- Logo --> */}
            <Logo Link={Link} />
            {/* <!--/ End Logo --> */}
            {/* <!-- Search Form --> */}
              <NavSearchForm />
            {/* <!--/ End Search Form --> */}
            {/* <MobileNav /> */}
          </div>
          <NavSearchBar />
          <ShoppingMenu />
        </div>
      </div>
    </div>
  );
};
