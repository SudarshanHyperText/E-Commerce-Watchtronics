import { useSidebarContext } from "../Context/Sidebar_context";

const Sidebar_reducer = (state, action) => {
  const { opensidebar, closesidebar, isSidebarOpen } = useSidebarContext();

  if (action.type === "OPEN_SIDEBAR") {
  }
  if (action.type === "CLOSE_SIDEBAR") {
  }
  throw new Error(`${action.type}`);
};
