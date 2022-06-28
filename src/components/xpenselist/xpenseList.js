import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import { ToastContainer, toast } from "react-toastify";

const XpenseList = () => {
  const { xpenseList, query } = useSelector((state) => state.xpenseReducer);
  const list = xpenseList.filter(item=> (item.title.includes(query)));
  const notify = () => toast.success(`Your Expense is Deleted`);
  console.log(Card.title)
  return (
    <React.Fragment>
      <ToastContainer
        position="bottom-right"
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
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>Uh Oh! No Xpense available</label>
        </div>
      ) : (
        list.map(item => <Card item={item} notify={notify} />)
      )
      }
      {
        (!list.length && query !== "") && (
          <div>No item found</div>
        )
      }
    </React.Fragment>
  );
};

export default XpenseList;
