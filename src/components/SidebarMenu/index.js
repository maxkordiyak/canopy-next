// This file is shared across the demos.
import React from 'react';
import {NavLink} from 'react-router-dom';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Dashboard from '@material-ui/icons/Dashboard';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import VpnKey from '@material-ui/icons/VpnKey';
import Group from '@material-ui/icons/Group';
import HelpOutline from '@material-ui/icons/HelpOutline';
import Tooltip from 'material-ui/Tooltip';
import './index.css';

export const mailFolderListItems = (
	<div className="sidebaMenu">
		<NavLink exact to='/home'>
			<ListItem button>
				<Tooltip id="tooltip-bottom" title="Dashboard" placement="bottom">
					<ListItemIcon>
						<Dashboard/>
					</ListItemIcon>
				</Tooltip>
				<ListItemText primary="Dashboard"/>
			</ListItem>
		</NavLink>
		<NavLink exact to='/home/test'>
			<ListItem button>
				<Tooltip id="tooltip-properties" title="Properties" placement="bottom">
					<ListItemIcon>
						<Home/>
					</ListItemIcon>
				</Tooltip>
				<ListItemText primary="Properties"/>
			</ListItem>
		</NavLink>
		<ListItem button>
			<Tooltip id="tooltip-users" title="Addresses" placement="bottom">
				<ListItemIcon>
					<AccountBox/>
				</ListItemIcon>
			</Tooltip>
			<ListItemText primary="Addresses"/>
		</ListItem>
	</div>
);

export const otherMailFolderListItems = (
	<div>
		<ListItem button>
			<Tooltip id="tooltip-landlords" title="Landlords" placement="bottom">
				<ListItemIcon>
					<VpnKey/>
				</ListItemIcon>
			</Tooltip>
			<ListItemText primary="Landlords"/>
		</ListItem>
		<ListItem button>
			<Tooltip id="tooltip-renters" title="Renters" placement="bottom">
				<ListItemIcon>
					<Group/>
				</ListItemIcon>
			</Tooltip>
			<ListItemText primary="Renters"/>
		</ListItem>
		<ListItem button>
			<Tooltip id="tooltip-help" title="Help" placement="bottom">
				<ListItemIcon>
					<HelpOutline/>
				</ListItemIcon>
			</Tooltip>
			<ListItemText primary="Help"/>
		</ListItem>
	</div>
);
