import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {createMuiTheme, MuiThemeProvider, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SingUpImg from '../../assets/images/singup_pic.png';
import LogoBig from '../../assets/images/LogoBig.png';
import styles from '../SignIn/styles';

const theme = createMuiTheme({
	palette: {
		background: {default: '#FFFFFF'}
	},
	typography: {
		fontFamily: 'inherit'
	},
	overrides: {
		MuiBadge: {
			badge: {
				width: 12,
				height: 12,
				top: 10,
				right: 10,
				border: '2px solid #FFF',
				fontSize: 0
			}
		},
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
		MuiExpansionPanelSummary: {
			content: {
				minHeight: 40,
				'&$expanded': {
					margin: '12px 0'
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


class SignUpContainer extends React.Component {
	state = {};

	render() {
		const {classes, history} = this.props;
		return (
			<MuiThemeProvider theme={theme}>
				<div className={classes.root}>
					<div className={classes.appFrame}>
						<Drawer
							variant="permanent"
							anchor={'left'}
							classes={{
								docked: classes.drawer,
								paper: classes.drawerPaper
							}}
						>
							<img className={classes.logoImage} src={LogoBig} alt={'Canopy Logo'}/>
							<Typography variant="title" paragraph={true} align={'center'}>
								Sign Up
							</Typography>
							<div className={classes.formsWrapper}>FORMS</div>
							<Typography variant="subheading" align={'center'}>
								Already have an account? <Link to={'/signin'} className="textBold">Sign In</Link>
							</Typography>
						</Drawer>
						<div className={classes.content}>
							<Paper className={classes.contentPaper}>
								<Typography variant="display1" align={'center'}>
									Start building your <br /> TrustScore today
								</Typography>
								<img className={classes.singUpImage} src={SingUpImg} alt={'Sing Up'}/>
								<Typography variant="subheading" align={'center'}>
									Provide data, track your rent payments and obtain references to build a TrustScore that's used by
									Agents and Landlords to validate your renting
								</Typography>
								<a href="" onClick={() => {
									history.push('/home');
								}}>Switch Home</a>
							</Paper>

						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

SignUpContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpContainer);
