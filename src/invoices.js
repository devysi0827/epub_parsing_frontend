import React from 'react';
import { Outlet,Link } from 'react-router-dom';

function invoices() {
  return <div>
       <h1>invoice</h1>
       <Link to="outlets">outlets</Link>
       <Outlet/>
  </div>;
}

export default invoices;
