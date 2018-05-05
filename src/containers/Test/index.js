import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

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

function Test(props) {
	const { classes, history } = props;

	return (
		<div className={classes.root}>
			<Grid container spacing={16}>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Typography variant="subheading" gutterBottom>
							TEST
						</Typography>
					</Paper>
					<a href="" onClick={() => {history.push('/home')}}>Switch Home</a>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={classes.paper}>
						<Typography variant="subheading" gutterBottom>TEST</Typography>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

Test.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Test);
