import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {MuiThemeProvider, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SingUpImg from '../../assets/images/singup_pic.png';
import LogoBig from '../../assets/images/LogoBig.png';
import styles from '../SignIn/styles';

import theme from '../themeOverrides';

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
