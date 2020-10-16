import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";


export default function MenuItems(props) {
    return (
    <MenuItem>{props.item}{props.children}</MenuItem>
    )
}