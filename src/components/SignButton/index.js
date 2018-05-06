import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';


const styles = theme => ({
	root: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '90%'
		},
		[theme.breakpoints.up('lg')]: {
			width: '80%'
		}
	},
	signButton: {
		position: 'relative',
		width: '100%',
		boxShadow: 'none',
		textTransform: 'none',
		borderRadius: 4,
		fontSize: 16,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
		border: '1px solid',
		backgroundColor: 'transparent',
		borderColor: '#65B98E',
		fontFamily: 'Montserrat-SemiBold',
		margin: `${theme.spacing.unit * 2}px 0`
	},
	btnIcon: {
		maxWidth: `${theme.spacing.unit * 4}px`,
		height: 'auto',
		marginRight: `${theme.spacing.unit}px`,
		verticalAlign: 'middle'
	},
	btnText: {
		marginBottom: 0,
		marginRight: `${theme.spacing.unit}px`,
		marginLeft: `${theme.spacing.unit}px`,
		minWidth: '50%',
		color: '#65B98E',
		textAlign: 'left'
	},
	btnArrow: {
		fontSize: 20,
		color: '#65B98E',
		position: 'absolute',
		right: `${theme.spacing.unit * 2}px`
	}
});

function SignButton(props) {
	const {classes, iconType, text, type} = props;
	const Wrapper = iconType;
	return (
		<div className={classes.root}>
			<Button className={classes.signButton} variant="flat" color="inherit">
				{type ? <span><img className={classes.btnIcon} src={Wrapper} alt={iconType}/></span> : <Wrapper/>}
				<Typography className={classes.btnText} variant="body2" paragraph={true} align={'center'}>
					{text}
				</Typography>
				<ArrowForward className={classes.btnArrow}/>
			</Button>
		</div>
	);
}

SignButton.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignButton);