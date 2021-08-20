import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import NavBar from '../Navigation/NavBar';
import { NavLink } from 'react-router-dom';
import './SplashPage.css'

function User() {

  const [user, setUser] = useState({});
  const { userId }  = useParams();


  useEffect(() => {
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



  return (
    <div className='splash-overall-container'>
    <NavBar />
    <div className='splash-container'>
      <div className='splash-info-container'>
          <div className='splash-content'>
          <h1> Investing for Everyone</h1>
          <p>Commission free investing, plus the tools you need to put your money in motion. Sign up and get your first Sneax for free. Certain limitations apply.</p>
          <NavLink to='/signup'>
      <button className='btn btn2'>Sign up</button>
      </NavLink>
          </div>
      </div>
      <div className='splash-info-container'>
          <img className='shoe-pic' src="https://i.imgur.com/YWIcguO.png"/>
      </div>
    </div>
    <div className='second-splash-container'>
        <div className='splash2-info'>
            <h1 className='splash2H1'>Break Free from Commission Fees</h1>
            <p>Make unlimited commission-free trades in Sneax, your favorite luxury sneaker brands, with Sneax Financials, as well as buy and sell Sneax cryptocurrencies with Sneax Crypto. See our fee schedule to learn more about cost.</p>
        </div>
    </div>
    <div className='third-splash-container'>
    <div className='splash-info-container'>
          <img className='shoe-pic2' src="https://i.imgur.com/6bDbImn.png"></img>
      </div>
      <div className='third-splash-text'>
      <h2>Introducing new Luxury Brands</h2>
      <span>Get in at the IPO price. Now, you can become one of the first public investors in upcoming IPOs.</span>
      <div className='icon-container'>
      <br></br>
      <i class="fas fa-user-tie fa-3x"> It's your turn</i>
      <p>No minimum account balances or special status requirements.</p>
      </div>
      <div className='icon-container'>
      <i class="fas fa-clock fa-3x"> Be one of the first</i>
      <p>Request shares in new companies before their sneaxs starts trading on public exchanges.</p>
      </div>
      <div className='icon-container'>
      <i class="fas fa-balance-scale fa-3x"> Get a fair shot</i>
      <p>While IPO shares are limited, IPO Access gives you the same opportunity to invest, regardless of order size or account value.</p>
      </div>
      </div>
    </div>
    <div className='fourth-splash-container'>
        <div className='fourth-text-main'>
        <h2>Introducing Fractional Shares</h2>
        <p>Invest in thousands of sneaxs with as little as $1.</p>
        </div>
        <div className='fourth-content'>
        <div className='fourth-content'>
            <h3>Invest Any Amount</h3>
            <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
        </div>
        <div className='fourth-content'>
            <h3>Build a Balanced Portfolio</h3>
            <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
        </div>
        <div className='fourth-content'>
            <h3>Trade in Real Time</h3>
            <p>Trades placed during market hours are executed at that time, so you’ll always know the share price.</p>
        </div>
        </div>
        <div className='fourth-photo-container'>
        <img className='fourth-photo' src='https://i.imgur.com/dN6DMnE.png'></img>
        </div>

    </div>
    <footer className='footer'>
    <div className='footer-text'>
    <p>© 2021 Sneax. All rights reserved.</p>
    <br></br>
    <p>Sneax means Sneax Markets and its in-application and web experiences with its family of wholly owned subsidiaries which includes Sneax Financial, Sneax Securities, and Sneax Crypto.</p>
    <br></br>
    <p>All investments involve risks, including the possible loss of capital.</p>
    <br></br>
    <p>Securities trading is offered to self-directed customers by Sneax Financial. Sneax Financial is a member of the Financial Industry Regulatory Authority (FINRA).</p>
    </div>
    </footer>
    </div>
  );
}
export default User;
