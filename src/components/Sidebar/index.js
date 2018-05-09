import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SIZES from '../../constants/SIZES';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import { mailFolderListItems, otherMailFolderListItems } from '../SidebarMenu';
import Logo from '../../assets/images/logo.png';

const drawerWidth = SIZES.drawerWidth;

const styles = theme => ({
	root: {
		zIndex: 1,
		position: 'relative',
		display: 'flex',
		[theme.breakpoints.up('sm')]: {
			overflow: 'hidden'
		}
	},
	menuButton: {
		margin: 0
	},
	logoIcon: {
		width: theme.spacing.unit * 4,
		height: 'auto',
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 6
		}
	},
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		borderRight: '1px solid #F5F7F9',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},

	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 9
		}
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: 0,
		borderBottom: '1px solid #F5F7F9',
		...theme.mixins.toolbar,
		[theme.breakpoints.up('sm')]: {
			padding: '0 8px'
		}
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
});

class Sidebar extends React.Component {

	_handleSidebar = event => {
		const { handleSidebar } = this.props;
		handleSidebar(event);
	};

	render() {
		const { classes, sidebarOpen } = this.props;
		
		return (
			<div className={classes.root}>
				<Drawer
					variant="permanent"
					classes={{
						paper: classNames(classes.drawerPaper, !sidebarOpen && classes.drawerPaperClose)
					}}
					open={sidebarOpen}
				>
					<div className={classes.toolbar}>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this._handleSidebar}
							className={classes.menuButton}
						>
							<img className={classes.logoIcon} src={Logo} alt="logo"/>
						</IconButton>
					</div>
					<List>{mailFolderListItems}</List>
					<List>{otherMailFolderListItems}</List>
				</Drawer>
			</div>
		);
	}
}

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);
