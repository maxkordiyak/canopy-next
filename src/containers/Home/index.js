import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppToolbar from '../../components/AppToolbar';
//import Sidebar from '../../components/Sidebar1';
import Sidebar from '../../components/Sidebar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	appFrame: {
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	hide: {
		display: 'none'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	}
});

class Home extends React.Component {
	state = {
		sidebarOpen: false,
		menuOpen: false,
		anchor: 'left',
		anchorEl: null
	};
	
	handleMenu = event => {
		this.setState({
			anchorEl: event.currentTarget,
			menuOpen: !this.state.menuOpen
		});
	};
	
	handleSidebar = event => {
		this.setState({
			anchorEl: event.currentTarget,
			sidebarOpen: !this.state.sidebarOpen
		});
	};
	
	render() {
		const { classes } = this.props;
		const { anchor, anchorEl, sidebarOpen, menuOpen } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<AppToolbar anchor={anchor}
											anchorEl={anchorEl}
											menuOpen={menuOpen}
											sidebarOpen={sidebarOpen}
											handleSidebar={this.handleSidebar}
											handleMenu={this.handleMenu}
					/>
					<Sidebar sidebarOpen={sidebarOpen} anchor={anchor} handleSidebar={this.handleSidebar}/>
					{/*MAIN CONTENT HERE*/}
					<main className={classes.content}>
						<div className={classes.toolbar}/>
						<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
					</main>
				</div>
			</div>
		
		);
	}
}


Home.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
