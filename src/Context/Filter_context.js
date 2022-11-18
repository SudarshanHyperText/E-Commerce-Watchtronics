import React, { useContext, useEffect, useReducer, useState } from "react";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return <FilterContext.Provider>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
