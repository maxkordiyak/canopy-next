import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import {MuiThemeProvider, withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {withRouter} from 'react-router-dom';
// Containers
import RentPassport from '../RentPassport';
import Test from '../Test';
// Components
import AppToolbar from '../../components/AppToolbar';
import Sidebar from '../../components/Sidebar';
import {setMessage} from '../../actions/app';
import './index.css';

import theme from '../themeOverrides';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#F5F7F9'
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
		marginTop:`${theme.spacing.unit * 8}px`,
		padding: `${theme.spacing.unit * 2}px`,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing.unit * 3}px`
		}
	}
});

class HomeContainer extends React.Component {
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

		const {classes} = this.props;
		const {anchor, sidebarOpen, menuOpen} = this.state;
		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<AppToolbar anchor={anchor}
							menuOpen={menuOpen}
							sidebarOpen={sidebarOpen}
							handleSidebar={this.handleSidebar}
							handleMenu={this.handleMenu}
						/>
						<Sidebar sidebarOpen={sidebarOpen} anchor={anchor} handleSidebar={this.handleSidebar}/>
						{/*MAIN CONTENT HERE*/}
						<main className={classes.content}>
							<Switch>
								<Route exact path='/' component={RentPassport}/>
								<Route exact path='/home' component={RentPassport}/>
								<Route exact path='/home/test' component={Test}/>
							</Switch>
						</main>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setMessage: () => dispatch(setMessage())
	};
};

const mapStateToProps = (state) => ({
	state: state
});

HomeContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default compose(
	withStyles(styles),
	withRouter,
	connect(mapStateToProps, mapDispatchToProps)
)(HomeContainer);
