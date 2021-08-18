import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allSneax } from "../../store/sneax";
import { getShares } from "../../store/shares";
import { getWatches } from "../../store/watchlist";
import NavBar from "../Navigation/NavBar";

import "./Dashboard.css";

function Dashboard() {
  const dispatch = useDispatch();
  // const watch = useSelector((state) => Object.values(state.list));
  const sneax = useSelector((state) => Object.values(state.sneax));
  const shares = useSelector((state) => Object.values(state.shares));
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const [showEdit, setShowEdit] = useState(false);
  const [showSell, setShowSell] = useState(false);
  const [sellId, setSellId] = useState("");
  const [sellQty, setSellQty] = useState("");
  const [numberShares, setNumber] = useState("");
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(allSneax());
    dispatch(getShares());
    // dispatch(getList());
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  let content = null;


  if (showEdit) {
    content = (
      <>
        <form>
          <label>
            {" "}
            number of shares
            <input type="number" value={null} onChange={null} />
          </label>
          <button>Purchase</button>
        </form>
      </>
    );
  } else {
    content = <></>;
  }

  if (showSell) {
    content = (
      <div className="sell_form_container">
        <form className="sell_form_mod">
          <label>
            {" "}
            number of shares
            <input type="number" value={sellQty} onChange={null} />
          </label>
          <label>
            {" "}
            number of shares
            <input type="number" value={null} onChange={null} />
          </label>
          <button>Buy</button>{" "}
          {/*toggle button fuction as according to available position*/}
          <button>Sell</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      {/* <div className='dash-container'>
      <div className='dash-info-container'>
        <div className='dash-info'> <h1>HELLO</h1> </div>
      </div> */}

      <div className="watch-shares-container">
        <div className="watch-info">
          {" "}
          <h1>HELLO</h1>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default Dashboard;
