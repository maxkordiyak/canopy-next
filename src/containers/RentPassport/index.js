import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Accordion from '../../components/Accordion';
import Typography from 'material-ui/Typography';
import VerifiedSign from '../../assets/images/verified.jpg';
import Button from 'material-ui/Button';

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing.unit * 2,
		marginBottom: theme.spacing.unit * 2,
		color: theme.palette.text.secondary
	}
});

const reviewsCategories = () => (
	<div>
		<Button variant="flat" color="secondary">Given (3)</Button>
		<Button variant="flat" color="secondary">Received (2)</Button>
	</div>
);

function RentPassport(props) {
	const { classes } = props;
	
	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Typography variant="subheading" gutterBottom>
							My RentPassport&trade;
						</Typography>
					</Paper>
					<Accordion title={'TrustScore\u2122'}
										 subTitle={VerifiedSign}
										 subTitleAlign={'right'}
										 subTitleType={'img'}
										 columns={2}
										 />
				</Grid>
				<Grid item xs={12} sm={6}>
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
