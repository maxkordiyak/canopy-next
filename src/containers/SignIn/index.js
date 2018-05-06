import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {MuiThemeProvider, withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import LogoBig from '../../assets/images/LogoBig.png';
import styles from './styles';
import theme from '../themeOverrides';
import SimpleCarousel from '../../components/SimpleCarousel';
import './index.css';

// SignIn Slides
import slides from './slides';
const renderSlides = () => {
	return slides.map(slide => {
		return (
			<div className="slideWrapper">
				<Typography variant="display1" align={'center'}>
					<span dangerouslySetInnerHTML={{__html:slide.title}}/>
				</Typography>
				<img className="sliderImage" src={slide.image} alt={'Sing Up'}/>
				<Typography variant="subheading" align={'center'}>
					{slide.subtitle}
				</Typography>
			</div>
		);
	});
};


class SignInContainer extends React.Component {
	state = {};
	render() {
		const {classes} = this.props;
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
								Sign In
							</Typography>
							<div className={classes.formsWrapper}>FORMS</div>
							<Typography variant="subheading" align={'center'}>
								Don't have an account? <Link to={'/signup'} className="textBold">Sign Up</Link>
							</Typography>
						</Drawer>
						<div className={classes.content}>
							<Paper className={classes.contentPaper}>
								<SimpleCarousel slides={renderSlides()} buttons={true} dots={true}/>
							</Paper>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

SignInContainer.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignInContainer);
