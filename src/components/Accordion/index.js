import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import ExpansionPanel, {
	ExpansionPanelDetails,
	ExpansionPanelSummary
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from 'material-ui/Button';

const styles = theme => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15)
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	},
	icon: {
		verticalAlign: 'bottom',
		height: 20,
		width: 20
	},
	details: {
		alignItems: 'center'
	},
	subTitleImage: {
		maxWidth: 90
	},
	column: {
		flexBasis: '100%',
		display: 'flex',
    alignItems: 'center'
	},
	column1: {
		flexBasis: '100%'
	},
	column2: {
		flexBasis: '50%'
	},
	column3: {
		flexBasis: '33.33%'
	},
	alignleft: {
		justifyContent: 'flex-start',
		textAlign: 'left'
	},
	alignright: {
		justifyContent: 'flex-end',
		textAlign: 'right',
	},
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: 'none',
		textTransform: 'initial',
		'&:hover': {
			backgroundColor: 'transparent',
			textDecoration: 'underline'
		}
	}
});

function Accordion(props) {
	const { classes, title, subTitle, subTitleAlign, subTitleType, columns } = props;
	const colClasses = classNames(classes.column, {
		[classes[`column${columns}`]]: columns
	});
	const subcolClasses = classNames(classes.column, {
		[classes[`column${columns}`]]: columns,
		[classes[`align${subTitleAlign}`]]: subTitleAlign
	});
	const Wrapper = subTitle;
	return (
		<div className={classes.root}>
			<ExpansionPanel defaultExpanded>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
					<div className={colClasses}>
						<Typography className={classes.heading}>{title}</Typography>
					</div>
					{subTitle && (
						<div className={subcolClasses}>
							{subTitleType ? <img className={classes.subTitleImage} src={Wrapper} alt=""/> : <Wrapper/>}
						</div>
					)}
				</ExpansionPanelSummary>
				<ExpansionPanelDetails className={classes.details}>
					<div className={colClasses}>
						<Typography variant="body1" gutterBottom>
							Email Address
						</Typography>
					</div>
					<div className={colClasses}>
						<Button href="emailto:stacy123@hotmail.com" className={classes.link}>
							stacy123@hotmail.com
						</Button>
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

Accordion.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Accordion);
