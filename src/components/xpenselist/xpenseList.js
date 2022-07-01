import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import { ToastContainer, toast } from "react-toastify";
import "../../App.css";

const XpenseList = () => {
  const { xpenseList, query } = useSelector((state) => state.xpenseReducer);
  const list = xpenseList.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.amount.toLowerCase().includes(query.toLowerCase()) ||
      item.category.title.toLowerCase().includes(query.toLowerCase())
  );
  const notify = () => toast.success(`Your Expense is Deleted`);
  return (
    <React.Fragment>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeOnClick
        draggable
        pauseOnHover
        color="#66fcf1"
      />
      {!list.length && query === "" ? (
        <div className="not-found">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="not-found-image"
          />
          <label>Uh Oh! Your expense list is empty</label>
        </div>
      ) : (
        list.map((item) => <Card item={item} notify={notify} />)
      )}
      {!list.length && query !== "" && (
        <div className="not-found empty-search">
          <img
            src={require("../../assets/images/search-result-not-found.webp")}
            alt="Invalid Search"
            className="search-image"
          />
          <label>Search result not found!</label>
        </div>
      )}
    </React.Fragment>
  );
};

export default XpenseList;
