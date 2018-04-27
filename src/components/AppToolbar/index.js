import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SIZES from '../../constants/SIZES';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';


const styles = theme => ({
	appBar: {
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${SIZES.drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	'appBarShift-left': {
		marginLeft: SIZES.drawerWidth
	},
	'appBarShift-right': {
		marginRight: SIZES.drawerWidth
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},
	hide: {
		display: 'none'
	},
	toolbarHeader: {
		flexGrow: 2
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	'content-left': {
		marginLeft: -SIZES.drawerWidth
	},
	'content-right': {
		marginRight: -SIZES.drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	'contentShift-left': {
		marginLeft: 0
	},
	'contentShift-right': {
		marginRight: 0
	}
});

class AppToolbar extends React.Component {
	
	_handleSidebar = event => {
		const { handleSidebar } = this.props;
		handleSidebar(event);
	};
	
	_handleMenu = event => {
		const { handleMenu } = this.props;
		handleMenu(event);
	};
	
	handleClose = () => {
		this.setState({ anchorEl: null });
	};
	
	render() {
		const { classes, anchor, anchorEl, sidebarOpen, menuOpen } = this.props;
		return (
			<div>
				<AppBar color="default"
								className={classNames(classes.appBar, {
									[classes.appBarShift]: sidebarOpen,
									[classes[`appBarShift-${anchor}`]]: sidebarOpen
								})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this._handleSidebar}
							className={classNames(classes.menuButton, sidebarOpen &&
								classes.hide)}
						>
							<MenuIcon/>
						</IconButton>
						<Typography className={classes.toolbarHeader} variant="title" color="inherit" noWrap>
							Canopy
						</Typography>
						<div>
							<IconButton
								aria-owns={menuOpen ? 'menu-appbar' : null}
								aria-haspopup="true"
								onClick={this._handleMenu}
								color="inherit"
							>
								<AccountCircle/>
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
								open={menuOpen}
								onClose={this._handleMenu}
							>
								<MenuItem onClick={this._handleMenu}>Profile</MenuItem>
								<MenuItem onClick={this._handleMenu}>My account</MenuItem>
							</Menu>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

AppToolbar.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(AppToolbar);
