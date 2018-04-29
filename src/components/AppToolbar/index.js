import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SIZES from '../../constants/SIZES';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuButton from '../MenuButton';
import Logo from '../../assets/images/logo.png';
import UserIcon from '../../assets/images/user.png';
import messagesIcon from '../../assets/images/messagesIcon.png';
import notificationsIcon from '../../assets/images/notificationsIcon.png';


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
	menuButtonWrap: {
		minHeight: 64,
		borderRight: '1px solid red',
		padding: 12,
		marginLeft: -25,
		marginRight: 24,
		borderRight: '1px solid rgba(0, 0, 0, 0.12)'
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
		const {handleSidebar} = this.props;
		handleSidebar(event);
	};

	_handleMenu = event => {
		const {handleMenu} = this.props;
		handleMenu(event);
	};

	componentDidMount() {
		console.log(this.props);
	}

	render() {
		const {classes, anchor, sidebarOpen} = this.props;
		return (
			<div>
				<AppBar color="inherit"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: sidebarOpen,
						[classes[`appBarShift-${anchor}`]]: sidebarOpen
					})}
				>
					<Toolbar>
						<div className={classNames(classes.menuButtonWrap, sidebarOpen &&
							classes.hide)}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={this._handleSidebar}
								className={classes.menuButton}
							>
								<img className={classes.logoIcon} src={Logo} alt="logo"/>
							</IconButton>
						</div>
						<Typography className={classes.toolbarHeader} variant="title" color="inherit" noWrap>
							Canopy
						</Typography>
						<MenuButton type="img" iconType={notificationsIcon} items={['Unread notifications', 'All notifications']}/>
						<MenuButton type="img" iconType={messagesIcon} items={['Unread messages', 'All messages']}/>
						<MenuButton type="img" iconType={UserIcon} items={['Profile', 'Logout']}/>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

AppToolbar.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles, {withTheme: true})(AppToolbar);
