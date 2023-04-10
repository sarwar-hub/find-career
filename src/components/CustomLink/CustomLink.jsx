import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "underline text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
            : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default CustomLink;