import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {MenuItem} from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import {InputAdornment} from 'material-ui/Input';
import Search from '@material-ui/icons/Search';
import {CircularProgress} from 'material-ui/Progress';
import Hidden from 'material-ui/Hidden';
import './index.css';

const suggestions = [
	{
		title: 'Properties',
		suggestions: [
			{
				name: 'Covey Cl, Lichfield WS13 6BS, UK',
				info: 'House'
			},
			{
				name: 'Stevenage Rd, St Ippolyts, Hitchin SG4 9YD, UK',
				info: 'Apt'
			},
			{
				name: 'Test property, St Thomas, London WS11 3BS, UK',
				info: 'Apt'
			}
		]
	},
	{
		title: 'Renters',
		suggestions: [
			{
				name: 'Daisy Tester',
				info: 'UK'
			},
			{
				name: 'Donald Tester',
				info: 'USA'
			}
		]
	},
	{
		title: 'Landlords',
		suggestions: [
			{
				name: 'Michael Landlord',
				info: 'UK'
			},
			{
				name: 'John Landlord',
				info: 'UK'
			},
			{
				name: 'Sarah Landlord',
				info: 'UK'
			},
			{
				name: 'Noah Landlord',
				info: 'UK'
			}
		]
	},
	{
		title: 'Users',
		suggestions: [
			{
				name: 'Anonymous User',
				info: 'UK'
			},
			{
				name: 'Test User',
				info: 'UK'
			},
			{
				name: 'Friend User',
				info: 'UK'
			}
		]
	}
];


const styles = theme => ({
	hide: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	inputWrapper: {
		position: 'fixed',
		display: 'block',
		top:  theme.spacing.unit * 7,
		left:  theme.spacing.unit * 7,
		padding: `${theme.spacing.unit}px 0 ${theme.spacing.unit}px ${theme.spacing.unit*2}px`,
		backgroundColor: '#fff',
		boxShadow: '0px 0px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 3px 5px 1px -3px rgba(0, 0, 0, 0.12)',
		width: `calc(100% - ${theme.spacing.unit * 7}px)`,
		[theme.breakpoints.up('sm')]: {
			position: 'initial',
			boxShadow: 'none',
			width: 'initial'
		}
	},
	container: {
		flexGrow: 2,
		position: 'relative'
	},
	suggestionsContainerOpen: {
		position: 'fixed',
		display: 'block',
		top:  theme.spacing.unit * 13,
		left:  theme.spacing.unit * 7,
		width: `calc(100% - ${theme.spacing.unit * 7}px)`,
		[theme.breakpoints.up('sm')]: {
			position: 'absolute',
			zIndex: 1,
			marginTop: theme.spacing.unit,
			left: 0,
			top: '30px',
			right: 0
		}
	},
	suggestion: {
		display: 'block'
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none'
	},
	searchInput: {
		minWidth: theme.spacing.unit * 40,
		fontSize: 13,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 50,
			fontSize: theme.typography.subheading.fontSize
		}
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center'
	}
});


const renderSuggestion = (suggestion, {query, isHighlighted}) => {
	const matches = match(suggestion.name, query);
	const parts = parse(suggestion.name, matches);
	return (
		<MenuItem selected={isHighlighted} component="div">
			<div className="textTruncate">
				{parts.map((part, index) => {
					return part.highlight ? (
						<span key={String(index)} style={{fontWeight: 300}}>
							{part.text}
						</span>
					) : (
						<strong key={String(index)} style={{fontWeight: 500}}>
							{part.text}
						</strong>
					);
				})}
				<span> &nbsp;({suggestion.info})</span>
			</div>
		</MenuItem>
	);
};


const escapeRegexCharacters = str => {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const renderSectionTitle = section => {
	return (
		<Typography style={{
			padding: '0 16px',
			fontSize: 12,
			fontWeight: 700
		}} variant="body2" gutterBottom>{section.title}</Typography>
	);
};

const getSectionSuggestions = section => {
	return section.suggestions;
};

const renderSuggestionsContainer = options => {
	const {containerProps, children} = options;
	return (
		<Paper {...containerProps}>
			{children}
		</Paper>
	);
};

const getSuggestionValue = suggestion => {
	return suggestion.name;
};

const getSuggestions = value => {
	const escapedValue = escapeRegexCharacters(value);
	if (escapedValue === '') {
		return [];
	}
	const regex = new RegExp(`\\b${escapedValue}`, 'gi');
	return suggestions.map(section => {
		return {
			title: section.title,
			suggestions: section.suggestions.filter(suggestion => regex.test(suggestion.name))
		};
	})
		.filter(section => section.suggestions.length > 0);
};


class IntegrationAutosuggest extends React.Component {
	state = {
		value: '',
		suggestions: [],
		isLoading: 0,
		showInput: false
	};

	toggleInput = () => {
		this.setState({
			showInput: !this.state.showInput
		});
	};


	renderInput = inputProps => {
		const {classes, ref, loading, ...other} = inputProps;
		const {showInput} = this.state;
		const InputProps = {
			inputRef: ref,
			classes: {
				input: classes.searchInput
			},
			startAdornment: <div style={{display: 'flex'}} >{!showInput && <InputAdornment position="start"><Search/></InputAdornment>}</div>,
			...other
		};

		return (
			<div className={classes.flexRow}>
				<Hidden smUp>
					<Search onClick={this.toggleInput}/>
				</Hidden>
				<div className={showInput ? classes.inputWrapper : classes.hide}>
					<TextField InputProps={InputProps}/>
				</div>
				{loading ? <CircularProgress size={24}/> : null}
			</div>
		);
	};

	handleSuggestionsFetchRequested = ({value}) => {
		// FIXME Fetching emulations - REMOVE
		setTimeout(() => {
			this.setState({
				suggestions: getSuggestions(value),
				isLoading: 0
			});
		}, 1500);

	};

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
			isLoading: 0
		});
	};

	handleChange = (event, {newValue}) => {
		this.setState({
			value: newValue,
			isLoading: 1
		});
	};

	render() {
		const {classes} = this.props;
		const inputProps = {
			classes,
			loading: this.state.isLoading,
			placeholder: 'Search Properties, Renters, Landlords & Users...',
			value: this.state.value,
			onChange: this.handleChange
		};
		return (
			<Autosuggest
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion,
					suggestionTitle: classes.suggestionTitle
				}}
				multiSection={true}
				suggestions={this.state.suggestions}
				renderInputComponent={this.renderInput}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
				renderSuggestionsContainer={renderSuggestionsContainer}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				getSectionSuggestions={getSectionSuggestions}
				renderSectionTitle={renderSectionTitle}
				inputProps={inputProps}
			/>
		);
	}
}

IntegrationAutosuggest.propTypes = {
	classes: PropTypes.object.isRequired

};

export default withStyles(styles)(IntegrationAutosuggest);
