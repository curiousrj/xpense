import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { deleteXpense } from "../../redux/actions/xpenseAction";
import '../../App.css'
import './xpenseList.css'

const Card = ({ item, notify }) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteXpense(item));
        notify();
    }
  return (
    <div className="container">
      <div className="card-container " style={{borderRight: `5px solid ${item.category.color}`}}>
      <i className={item.category.icon}></i>
      <div className="card-middle">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{moment(item.creationTime).fromNow()}</label>
      </div>
      <div className="card-right">
        <i className="fa-solid fa-trash" onClick={deleteHandler}></i>
        <label className="card-amount">{`₹ ${item.amount}`}</label>
      </div>
      </div>
    </div>
  );
};

export default Card;
