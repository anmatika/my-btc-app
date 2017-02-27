import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const MainView = props => (<div>
  <Navbar />
  <br />
  {props.children}
</div>);

export default MainView;
