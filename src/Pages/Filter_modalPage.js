import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../Context/Sidebar_context";
import Filters from "../components/Filter/Filters";
import { FaTimes } from "react-icons/fa";

const Filter_modal = () => {
  const { isModalOpen, closeModal } = useSidebarContext();

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <Filters className="filter" />
          <button className="close-modal-btn" onClick={closeModal}>
            <FaTimes></FaTimes>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filter_modal;

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
    // background-color: white;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    width: 90vw;
    height: 90vh;
    text-align: center;
  }
  .close-modal-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-red-dark);
    cursor: pointer;
  }
  .filter {
    display: block;
  }
`;
