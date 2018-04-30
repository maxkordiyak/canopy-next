import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {withRouter} from 'react-router-dom';
import RentPassport from '../RentPassport';
import AppToolbar from '../../components/AppToolbar';
import Sidebar from '../../components/Sidebar';


import {setMessage} from '../../actions/app';
import './index.css';

const theme = createMuiTheme({
	palette: {
		background: {default: '#FFF'}
	},
	overrides:{
		MuiPaper: {
			rounded: {
				borderRadius: 4
			}
		},
		MuiExpansionPanel: {
		  root: {
				'&:first-child': {
					borderTopLeftRadius: 4,
					borderTopRightRadius: 4
				},
				'&:last-child': {
					borderBottomLeftRadius: 4,
					borderBottomRightRadius: 4
				}
			}
		},
		MuiInput: {
			underline: {
				'&:hover:not(.MuiInput-disabled):before': {
					borderWidth: 1,
					backgroundColor: '#F5F7F9'
				},
				'&:before': {
					backgroundColor: '#FFFFFF'
				},
				'&:after': {
					backgroundColor: '#586881'
				}
			}
		},
		MuiButton: {
			flatSecondary: {
				background: 'transparent',
				borderRadius: 3,
				border: 0,
				color: '#b5bec9',
				transitionDuration: '0ms',
				height: 28,
				padding: '0 10px',
				textTransform: 'none',
				boxShadow: 'none',
				'&:hover': {
					borderWidth: 1,
					backgroundColor: '#f6f9fc',
					color: '#6b7c93'
				}
			}
		}
	}
});
// Override default (1st and 2nd) Theme shadow
theme.shadows[1] = '0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px -1px rgba(0, 0, 0, 0.08)';
theme.shadows[2] = '0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px -1px rgba(0, 0, 0, 0.08)';

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
		padding: `${theme.spacing.unit * 3}px`,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
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
							<RentPassport />
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
