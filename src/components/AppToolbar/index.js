import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SIZES from '../../constants/SIZES';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MenuButton from '../MenuButton';
import UserIcon from '../../assets/images/user.png';
// import messagesIcon from '../../assets/images/messagesIcon.png';
// import notificationsIcon from '../../assets/images/notificationsIcon.png';
import messagesIcon from '@material-ui/icons/Sms';
import notificationsIcon from '@material-ui/icons/Notifications';
import IntegrationAutosuggest from '../../components/Autocomplete';

const styles = theme => ({
	appBar: {
		position: 'absolute',
		marginLeft: 56,
		width: 'calc(100% - 56px)',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		[theme.breakpoints.up('sm')]: {
			marginLeft: 72,
			width: 'calc(100% - 72px)'
		}
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
	hide: {
		display: 'none'
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
	},
	margin: {
		margin: theme.spacing.unit
	},
	sideMargins: {
		margin: `0 ${theme.spacing.unit}`
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
	
	render() {
		const {classes, anchor, sidebarOpen, theme } = this.props;
		return (
			<div>
				<AppBar color="inherit"
					elevation={0}
					className={classNames(classes.appBar, {
						[classes.appBarShift]: sidebarOpen,
						[classes[`appBarShift-${anchor}`]]: sidebarOpen
					})}
				>
					<Toolbar>
						<IntegrationAutosuggest />
						<MenuButton badge="true" iconType={notificationsIcon} items={['Unread notifications', 'All notifications']}/>
						<MenuButton margins={{margin: `0 ${theme.spacing.unit}px`, transform: 'scaleX(-1)'}} iconType={messagesIcon} items={['Unread messages', 'All messages']}/>
						<MenuButton margins={{margin: `0 ${theme.spacing.unit}px`}} type="img" iconType={UserIcon} items={['Profile', ['Logout', '/']]}/>
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
