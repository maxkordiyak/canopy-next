import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

class MenuButton extends React.Component {
	state = {
		anchorEl: null
	};
	
	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};
	
	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	
	render() {
		const { badge, type, iconType, items, margins } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const Wrapper = iconType;
		const listItems = items.map((link) =>
			<MenuItem key={link} onClick={this.handleClose}>{link}</MenuItem>
		);
		return (
			<div style={margins && margins}>
				{badge ? (
					<Badge badgeContent={''} color="secondary">
						<IconButton
							aria-owns={open ? 'menu-appbar' : null}
							aria-haspopup="true"
							onClick={this.handleMenu}
						>
							{type ? <img src={Wrapper} alt=""/> : <Wrapper/>}
						</IconButton>
					</Badge>
				) : (
					<IconButton
						aria-owns={open ? 'menu-appbar' : null}
						aria-haspopup="true"
						onClick={this.handleMenu}
					>
						{type ? <img src={Wrapper} alt=""/> : <Wrapper/>}
					</IconButton>
				)}
				<Menu
					id="menu-appbar"
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					open={open}
					onClose={this.handleClose}
				>
					{listItems}
				</Menu>
			</div>
		);
	}
	
}

export default MenuButton;
