import React from "react";
import category from "./category";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addXpense } from "../../redux/actions/xpenseAction";
import { Link } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [showCat, setShowCat] = useState(false);
  const [cat, setCat] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const showCategory = () => {
    setShowCat(!showCat);
  };
  const categoryHandler = () => {
    setShowCat(!showCat);
  };
  const amountHandler = (event) => {
    const amount = event.target.value;
    if (!isNaN(amount) && amount.length < 8) {
      setAmount(event.target.value);
    }
  };
  const titleHandler = (event) => {
    const title = event.target.value;
    if (title.length <= 60) setTitle(title);
  };
  const submitHandler = () => {
    if (title === "" || amount === "" || cat === "") {
      const notify = () => toast.error("Please complete the form!");
      notify();
    } else {
      const date= new Date();
      const data = {
        title,
        amount,
        category: cat,
        creationTime: date.toISOString(),
      };
      dispatch(addXpense(data));
      setModalActive(true);
    }
  };
  return (
    <React.Fragment>
      {modalActive && (
        <div className="success-message">
          <label>Xpense added successfully</label>
          <img
            src={require("../../assets/images/added-image.png")}
            alt="Xpense Added"
            className="added-image"
          />
          <Link to="/">
            <div className="take-home-button">
              <i className="fa-solid fa-house button-icon-margin-right"></i>
              <label>Home</label>
            </div>
          </Link>
        </div>
      )}

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

      <div className="add-form-container">
        <div className="add-form">
          <div className="title">
            <label>Title</label>
            <input
              placeholder="Give a name to your Xpense"
              onChange={(e) => titleHandler(e)}
              value={title}
            />
          </div>
          <div className="amount">
            <label>Amount</label>
            <input
              placeholder="Enter Amount"
              onChange={(e) => amountHandler(e)}
              value={amount}
            />
          </div>
          <div className="category-dropdown" onClick={showCategory}>
            <label>{!cat ? "Category" : cat.title}</label>
            <i className="fa-solid fa-chevron-down"></i>
          </div>

          {showCat &&
            category.map((cat) => {
              return (
                <div
                  className="category"
                  style={{ borderRight: `5px solid ${cat.color}` }}
                  onClick={() => {
                    setCat(cat);
                    categoryHandler(cat);
                  }}
                  key={cat.id}
                >
                  <label>{cat.title}</label>
                  <i className={cat.icon}></i>
                </div>
              );
            })}
        </div>
        <div className="submit-button-container">
          <div className="submit-button border-button" onClick={submitHandler}>
            <label>Add</label>
            <i className="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddForm;
