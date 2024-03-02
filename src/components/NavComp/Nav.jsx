import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="about"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="gallery"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    ProjectGallery
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="projectDetails"
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Project Details
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                >
                    Contact
                </NavLink>
            </li>
        </ul>
    );
}

export default Nav;
