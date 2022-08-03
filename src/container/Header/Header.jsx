import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title={'Free Solution with dashboard'} />
      <h1 className="app__header-h1">UCCX Customer Callback Script</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        In this post, I show you how to write a courtesy callback script, and
        provide code for a live dashboard
      </p>
      <button type="button" className="custom__button">
        View Article
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.dashboard} />
    </div>
  </div>
);

export default Header;
