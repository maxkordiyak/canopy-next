import React from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
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
		const { type, iconType, items } = this.props;
		const { anchorEl } = this.state;
		const open = Boolean(anchorEl);
		const Wrapper = iconType;
		const listItems = items.map((link) =>
			<MenuItem key={link} onClick={this.handleClose}>{link}</MenuItem>
		);
		
		return (
			<div>
				<IconButton
					aria-owns={open ? 'menu-appbar' : null}
					aria-haspopup="true"
					onClick={this.handleMenu}
					color="contrast"
				>
					{type ? <img src={Wrapper} alt=""/> : <Wrapper/>}
				</IconButton>
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
