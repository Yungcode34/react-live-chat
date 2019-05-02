import React from'react';
const SideBar = ({logout}) => {

    return (
    <div className='column is-3 hero has-background-link'>
    <h1>side bar</h1>
    <div className='control'>
    <button onClick={logout} className='button is-fullwidth'>LOG OUT</button>
    </div>
  </div>
    )
  };

  export default SideBar;