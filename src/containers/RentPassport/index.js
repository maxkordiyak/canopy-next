import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Accordion from '../../components/Accordion';
import Typography from 'material-ui/Typography';
import VerifiedBadge from '../../assets/images/verified.png';


const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
		color: theme.palette.text.secondary
	},
	padded: {
		padding: `0 ${theme.spacing.unit * 2}`
	}
});


const reviewsCategories = () => (
	<div className="flexRow">
		<Typography variant="body2" className="pr-16 pl-16">Given (3)</Typography>
		<Typography variant="body2">Received (2)</Typography>
	</div>
);


const verifiedSign = () => (
	<div className="flexRow alignCenter justifyCenter">
		<Typography variant="body2" className="pr-8 pl-8">Verified</Typography>
		<img className="verifiedBadge" src={VerifiedBadge} alt="Verified Badge"/>
	</div>
);

function RentPassport(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				<Grid item xs={12} md={6}>
					<Paper className={classes.paper}>
						<Typography variant="subheading" gutterBottom>
							My RentPassport&trade;
						</Typography>
					</Paper>
					<Accordion title={'TrustScore\u2122'}
										 subTitle={verifiedSign}
										 subTitleAlign={'right'}
										 columns={2}
										 />
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper className={classes.paper}>
						  <Typography variant="subheading" gutterBottom>My Property</Typography>
					</Paper>
					<Accordion title={'Reviews'}
						subTitle={reviewsCategories}
						subTitleAlign={'right'}
						columns={2}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

RentPassport.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RentPassport);
