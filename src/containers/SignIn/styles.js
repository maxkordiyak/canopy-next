// Common styles for 'Sign In' and 'Sign Up'
const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#f5f7f9'
	},
	appFrame: {
		zIndex: 1,
		minHeight: '100vh',
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%'
	},
	drawer: {
		position: 'relative',
		width: '100%',
		backgroundColor: theme.palette.common.white,
		[theme.breakpoints.up('md')]: {
			width: '40%'
		}
	},
	drawerPaper: {
		minWidth: '100%',
		height: '100%',
		position: 'relative',
		backgroundColor: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '3em 2em',
		[theme.breakpoints.up('md')]: {
			width: '40%',
			padding: '6em 4em'
		}
	},
	logoImage: {
		maxWidth: `${theme.spacing.unit * 24}px`,
		height: 'auto',
		marginBottom: `${theme.spacing.unit * 6}px`
	},
	formsWrapper: {
		minHeight: `${theme.spacing.unit * 30}px`
	},
	content: {
		display: 'flex',
		flexGrow: 1,
		width: '100%',
		backgroundColor: '#f4f7fb',
		padding: '10%',
		[theme.breakpoints.up('md')]: {
			width: '60%',
			padding: '6em 4em'
		},
		[theme.breakpoints.up('lg')]: {
			width: '60%',
			padding: '6em'
		}
	},
	contentPaper: {
		flexGrow: 1,
		padding: `${theme.spacing.unit * 5}px`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.up('md')]: {
			padding: `${theme.spacing.unit * 8}px`
		},
		[theme.breakpoints.up('lg')]: {
			padding: `${theme.spacing.unit * 10}px`
		}
	},
	singUpImage: {
		maxWidth: '100%',
		height: 'auto',
		margin:  `${theme.spacing.unit * 3}px 0`
	}
});
export default styles;

