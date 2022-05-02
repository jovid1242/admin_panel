import { useTypedSelector } from "hooks/useTypedSelector";
import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes } from "router/privateRoutes";
import { publicRoutes } from "router/publicRoutes";
import { RouteNames } from "router/routeNames";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  const getPrivateRoutes = () => {
    return (
      <>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
      </>
    );
  };

  const getPublicRoutes = () => {
    return (
      <>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          />
        ))}
        <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
      </>
    );
  };

  return <Routes>{isAuth ? getPrivateRoutes() : getPublicRoutes()}</Routes>;
};

export default AppRouter;
