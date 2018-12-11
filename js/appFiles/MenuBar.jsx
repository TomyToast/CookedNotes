import React, {Component, Fragment} from 'react';
import {Link,NavLink} from 'react-router-dom';

export class MenuBar extends React.Component{
    render(){
        return(
            <div className="MenuBar">
                <MenuBarImgLogo />
                <MenuBarBtns />
            </div>
        )
    }
}

class MenuBarImgLogo extends React.Component{
    render(){
        return(
            <Link className='logo' to='/'>
                CookedNotes
            </Link>
        )
    }
}

class MenuBarBtns extends React.Component{
    render(){
        // const activeStyle =	{
		//     backgroundColor:'tomato'
        // };
        return(
            <ul className="menuBtns">
                <li>
                    <NavLink
                        to="/create"
                        className="NavLink"
                        activeClassName="active"
                    >
                        <div className='createRecipe'>Stwórz przepis</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className="NavLink"
                        activeClassName="active"
                    >
                        <div className='showRecipe'>Pokaż przepis</div>
                    </NavLink>
                </li>
            </ul>
        )
    }
}
