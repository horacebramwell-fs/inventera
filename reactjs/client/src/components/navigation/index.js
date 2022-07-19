import React from 'react';
import { FiHome, FiSettings, FiPackage } from 'react-icons/fi';
import { IoFlameOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { VscBeaker } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="d-flex flex-column p-2 gap-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <FiHome size={20} />
          <span className="ml-2">Home</span>
        </span>
      </NavLink>
      <NavLink
        to="/materials"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <FiPackage size={20} />
          <span className="ml-2">Materials</span>
        </span>
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <IoFlameOutline size={23} />
          <span className="ml-2">Products</span>
        </span>
      </NavLink>
      <NavLink
        to="/productions"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <FaRegCalendarAlt size={18} />
          <span className="ml-2">Productions</span>
        </span>
      </NavLink>
      <NavLink
        to="/formulas"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <VscBeaker size={20} />
          <span className="ml-2">Formulas</span>
        </span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        <span className="d-flex align-items-center gap-2">
          <FiSettings size={20} />
          <span className="ml-2">Settings</span>
        </span>
      </NavLink>
    </nav>
  );
}
