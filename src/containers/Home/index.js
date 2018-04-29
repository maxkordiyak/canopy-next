import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider, withStyles} from 'material-ui/styles';
import {connect} from 'react-redux';
import compose from 'recompose/compose';
import {withRouter} from 'react-router-dom';
import AppToolbar from '../../components/AppToolbar';
import Sidebar from '../../components/Sidebar';
import Typography from 'material-ui/Typography';
import {setMessage} from '../../actions/app';
import './index.css';

const theme = createMuiTheme({
	palette: {
		background: {default: '#FFF'}
	},
	overrides:{
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
		}
	}
});


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
		padding: `${theme.spacing.unit * 11}px  ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
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
							<div className={classes.toolbar}/>
							<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
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
