import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let authNavItem = props.isAuthenticated ?
        <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem>
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Burger Builder</NavigationItem>
            {props.isAuthenticated? <NavigationItem link="/orders">Orders</NavigationItem>:null}
            {authNavItem}
        </ul>
    );
}

export default navigationItems;