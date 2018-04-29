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
		overflow: 'hidden',
		position: 'relative',
		display: 'flex'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		margin: 0
	},
	logoIcon: {
		width: 48,
		height: 'auto'
	},
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
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
		padding: '0 8px',
		...theme.mixins.toolbar
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
