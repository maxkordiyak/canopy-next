// Common styles for 'Sign In' and 'Sign Up'
const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#f5f7f9'
	},
	appFrame: {
		zIndex: 1,
		height: '100vh',
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%'
	},
	drawer: {
		position: 'relative',
		width: '100%',
		backgroundColor: theme.palette.common.white,
		[theme.breakpoints.up('sm')]: {
			width: '40%'
		}
	},
	drawerPaper: {
		minWidth: '100%',
		position: 'relative',
		backgroundColor: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: '4em 2em',
		[theme.breakpoints.up('sm')]: {
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
		[theme.breakpoints.up('sm')]: {
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
		[theme.breakpoints.up('sm')]: {
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

