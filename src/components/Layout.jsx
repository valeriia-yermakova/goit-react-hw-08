import PropTypes from 'prop-types';
import { Suspense } from "react";

import { AppBar } from "./AppBar/AppBar";
import Loader from "./Loader/Loader";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};