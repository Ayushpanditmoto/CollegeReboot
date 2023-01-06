import React, { useRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import useClickOutside from "../../helpers/clickOutside";

function SearchMenu({ setShow }) {
  const el = useRef(null);

  useClickOutside(el, () => {
    // el.current.style.display = "none";
    setShow(false);
  });
  return (
    <SearchContain ref={el}>
      <div className="search_wrap">
        <div className="header_logo">
          <div className="circle hover1">
            <FaSearch color="blue" />
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="searach_history_wrapper">
        <span>Recent searches</span>
        <a href="/">Edit</a>
      </div>
      <div className="search_history">
        <div className="search_history_item">
          <div className="search_history_item_img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>
          <div className="search_history_item_name">
            <span>Ayush</span>
            <span>1 day ago</span>
          </div>
        </div>
        <div className="search_history_item">
          <div className="search_history_item_img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
          </div>
          <div className="search_history_item_name">
            <span>Ayush</span>
            <span>1 day ago</span>
          </div>
        </div>
      </div>
    </SearchContain>
  );
}

export default SearchMenu;

const SearchContain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 500px;
  background-color: white;
  z-index: 100;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  padding: 1rem;
  .search_wrap {
    display: flex;
    align-items: center;
    .header_logo {
      display: flex;
      align-items: center;
      .circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e9ebee;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
      }
    }
    .search {
      flex: 1;
      input {
        width: 100%;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 0 1rem;
        outline: none;
      }
    }
  }
  .searach_history_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    span {
      font-size: 1.2rem;
      font-weight: 600;
    }
    a {
      font-size: 1rem;
      color: #1877f2;
      text-decoration: none;
    }
  }
  .search_history {
    margin-top: 1rem;
    .search_history_item {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      .search_history_item_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .search_history_item_name {
        margin-left: 1rem;
        span {
          display: block;
        }
        span:first-child {
          font-size: 1.2rem;
          font-weight: 600;
        }
        span:last-child {
          font-size: 1rem;
          color: #777;
        }
      }
    }
  }
`;
