import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Productadmin from '../component/productadmin';

const Layoutadmin = () => {
    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layoutadmin;
