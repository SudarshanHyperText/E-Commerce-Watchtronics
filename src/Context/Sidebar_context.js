import React, { useContext, useEffect, useReducer, useState } from "react";

const SidebarContext = React.createContext();

export const SideabrProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSortModalOpen, setIsSortModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSortModal = () => {
    setIsSortModalOpen(true);
  };
  const closeSortModal = () => {
    setIsSortModalOpen(false);
  };

  return (
    <SidebarContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        isSidebarOpen,
        isModalOpen,
        openModal,
        closeModal,
        isSortModalOpen,
        openSortModal,
        closeSortModal,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
