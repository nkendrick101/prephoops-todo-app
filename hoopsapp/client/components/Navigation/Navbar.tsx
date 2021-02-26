import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SidenavDashboard from './SidenavDashboard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navBar: {
    backgroundColor: '#17408B',
    color: '#C9082A',
    },
  }),
);
export function Navbar() {
    const [showSidebar, toggleSidebar] = useState(false);

    const toggleNavbar = () => {
        toggleSidebar(!showSidebar);
    };

    const sidebarOffset = `${
        showSidebar
            ? "right-0"
            : "-right-full md:-right-1/2 lg:-right-1/3 xl:-right-1/4"
    }`;
    return (
        <>
            {/* The Menu Bar that the horizontal bar at the top of the screen that is shown on all breakpoints. It includes the logo als well as the Burger Menu */}
            <MenuBar onClick={toggleNavbar} />

            
        </>
    );
}

/**
 * A Mega Menu that takes the full witdth and height of the screen.
 */
export function MegaMenu() {
    const [showSidebar, toggleSidebar] = useState(false);

    const toggleNavbar = () => {
        toggleSidebar(!showSidebar);
    };

    const sidebarOffset = `${showSidebar ? "right-0" : "-right-full"}`;

    return (
        <>
            {/* The Menu Bar that the horizontal bar at the top of the screen that is shown on all breakpoints. It includes the logo als well as the Burger Menu */}
            <MenuBar onClick={toggleNavbar} />
            <div
                className={`h-screen w-screen fixed top-0 right-0 transition-all bg-purple-50 ${sidebarOffset} flex flex-col items-center justiy-start z-50 shadow-lg pt-8 pb-16 px-10`}
            >
                <div
                    className="flex justify-end w-full pb-8 cursor-pointer"
                    onClick={toggleNavbar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-full w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <NavbarMenuLink title="Home" link="/" onClick={toggleNavbar} />
                <NavbarMenuLink
                    title="Documentation"
                    link="/docs"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Blog"
                    link="/blog"
                    onClick={toggleNavbar}
                />
                <NavbarMenuLink
                    title="Contact"
                    link="/contact"
                    onClick={toggleNavbar}
                />
            </div>
        </>
    );
}

/**
 * A Link that can be displayed in the menu.
 * @param {object} props
 */
export function NavbarMenuLink({ title, link, onClick }) {
    return (
        <Link href={link}>
            <h4
                onClick={onClick}
                className="cursor-pointer text-2xl mb-8 hover:text-purple-700 transition-all"
            >
                {title}
            </h4>
        </Link>
    );
}
NavbarMenuLink.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

// The horizontal menu bar.
export function MenuBar({ onClick }) {
    const classes = useStyles();
    return (
       <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography  variant="h6" className={classes.title}>
             Hoops
            </Typography>
             <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onClick}>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>

    );
}
MenuBar.propTypes = {
    onClick: PropTypes.func.isRequired
};
