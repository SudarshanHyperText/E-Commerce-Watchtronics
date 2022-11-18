import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../Context/Sidebar_context";
import Sort from "../components/Sort/Sort";
import { FaTimes } from "react-icons/fa";

const Sort_modal = () => {
  const { isSortModalOpen, closeSortModal } = useSidebarContext();
  return (
    <Wrapper>
      <div
        className={`${
          isSortModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <Sort />
          <button className="close-modal-btn" onClick={closeSortModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Sort_modal;

const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
  }

  .show-modal {
    visibility: visible;
    z-index: 999;
  }
  .modal-container {
    position: absolute;
    top: 70px;
    background-color: white;
    // background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100vw;
    height: 20vh;
    text-align: center;
  }
  .close-modal-btn {
    position: absolute;
    top: 0;
    right: 0;
    // right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }
  .filter {
    display: block;
  }
`;
