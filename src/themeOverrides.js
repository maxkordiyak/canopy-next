import {createMuiTheme} from 'material-ui/styles/index';

const theme = createMuiTheme({
	palette: {
		background: {default: '#FFFFFF'},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)'
		},
		primary: {
			light: '#57CE92',
			main: '#4AAB7A',
			dark: '#307B6C'
		},
		secondary: {
			light: '#C4CAD4',
			main: '#F5F7F9',
			dark: '#586881'
		}
	},
	typography: {
		fontFamily: 'inherit',
		display4: {
			color: 'inherit'
		},
		display3: {
			color: 'inherit'
		},
		display2: {
			color: 'inherit'
		},
		display1: {
			color: 'inherit'
		},
		headline: {
			color: 'inherit'
		},
		title: {
			color: 'inherit'
		},
		subheading: {
			color: 'inherit'
		},
		body2: {
			color: 'inherit'
		},
		body1: {
			color: 'inherit'
		},
		caption: {
			color: 'inherit'
		}
	},
	overrides: {
		MuiBadge: {
			badge: {
				width: 12,
				height: 12,
				top: 10,
				right: 10,
				border: '2px solid #FFFFFF',
				fontSize: 0
			},
			colorSecondary: {
				backgroundColor: 'red'
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
					backgroundColor: '#C4CAD4',
					height: 2
				},
				'&:after': {
					backgroundColor: '#586881'
				}
			}
		},
		MuiCheckbox: {
			root: {
				color: '#586881',
				'&$checked': {
					color: '#586881'
				}
			},
			checked: {}
		},
		MuiButton: {
			flatPrimary: {
				background: '#4AAB7A',
				borderRadius: 3,
				border: 0,
				color: '#FFFFFF',
				textTransform: 'none',
				boxShadow: 'none',
				minHeight: 40,
				minWidth: 128,
				'&:hover': {
					borderWidth: 1,
					backgroundColor: '#307B6C',
					color: '#FFFFFF'
				}
			}
		}
	}
});
// Override default (1st and 2nd) Theme shadow
theme.shadows[1] = '0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px -1px rgba(0, 0, 0, 0.08)';
theme.shadows[2] = '0px 1px 2px 0px rgba(0, 0, 0, 0.1),0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px -1px rgba(0, 0, 0, 0.08)';

export default theme;