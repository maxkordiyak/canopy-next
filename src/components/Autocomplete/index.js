import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import { InputAdornment } from 'material-ui/Input';
import Search from '@material-ui/icons/Search';
import { CircularProgress } from 'material-ui/Progress';

const suggestions = [
	{ label: 'Afghanistan' },
	{ label: 'Aland Islands' },
	{ label: 'Albania' },
	{ label: 'Algeria' },
	{ label: 'American Samoa' },
	{ label: 'Andorra' },
	{ label: 'Angola' },
	{ label: 'Anguilla' },
	{ label: 'Antarctica' },
	{ label: 'Antigua and Barbuda' },
	{ label: 'Argentina' },
	{ label: 'Armenia' },
	{ label: 'Aruba' },
	{ label: 'Australia' },
	{ label: 'Austria' },
	{ label: 'Azerbaijan' },
	{ label: 'Bahamas' },
	{ label: 'Bahrain' },
	{ label: 'Bangladesh' },
	{ label: 'Barbados' },
	{ label: 'Belarus' },
	{ label: 'Belgium' },
	{ label: 'Belize' },
	{ label: 'Benin' },
	{ label: 'Bermuda' },
	{ label: 'Bhutan' },
	{ label: 'Bolivia, Plurinational State of' },
	{ label: 'Bonaire, Sint Eustatius and Saba' },
	{ label: 'Bosnia and Herzegovina' },
	{ label: 'Botswana' },
	{ label: 'Bouvet Island' },
	{ label: 'Brazil' },
	{ label: 'British Indian Ocean Territory' },
	{ label: 'Brunei Darussalam' }
];


const styles = theme => ({
	container: {
		flexGrow: 2,
		position: 'relative'
	},
	suggestionsContainerOpen: {
		position: 'absolute',
		zIndex: 1,
		marginTop: theme.spacing.unit,
		left: 0,
		right: 0
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
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing.unit * 50
		}
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center'
	}
});

function renderInput(inputProps) {
	const { classes, ref, ...other } = inputProps;

	return (
		<div className={classes.flexRow}>
			<TextField
				InputProps={{
					inputRef: ref,
					classes: {
						input: classes.searchInput
					},
					startAdornment: <InputAdornment position="start"><Search /></InputAdornment>,
					...other
				}}
			/>
			<CircularProgress size={24}/>
		</div>
	);
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
	const matches = match(suggestion.label, query);
	const parts = parse(suggestion.label, matches);

	return (
		<MenuItem selected={isHighlighted} component="div">
			<div>
				{parts.map((part, index) => {
					return part.highlight ? (
						<span key={String(index)} style={{ fontWeight: 300 }}>
							{part.text}
						</span>
					) : (
						<strong key={String(index)} style={{ fontWeight: 500 }}>
							{part.text}
						</strong>
					);
				})}
			</div>
		</MenuItem>
	);
}

function renderSuggestionsContainer(options) {
	const { containerProps, children } = options;

	return (
		<Paper {...containerProps} square>
			{children}
		</Paper>
	);
}

function getSuggestionValue(suggestion) {
	return suggestion.label;
}

function getSuggestions(value) {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;
	let count = 0;

	return inputLength === 0
		? []
		: suggestions.filter(suggestion => {
			const keep =
				count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

			if (keep) {
				count += 1;
			}

			return keep;
		});
}

class IntegrationAutosuggest extends React.Component {
	state = {
		value: '',
		suggestions: []
	};

	handleSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	handleSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	handleChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<Autosuggest
				theme={{
					container: classes.container,
					suggestionsContainerOpen: classes.suggestionsContainerOpen,
					suggestionsList: classes.suggestionsList,
					suggestion: classes.suggestion
				}}
				renderInputComponent={renderInput}
				suggestions={this.state.suggestions}
				onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
				onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
				renderSuggestionsContainer={renderSuggestionsContainer}
				getSuggestionValue={getSuggestionValue}
				renderSuggestion={renderSuggestion}
				inputProps={{
					classes,
					placeholder: 'Search Properties, Renters, Landlords & Users...',
					value: this.state.value,
					onChange: this.handleChange
				}}
			/>
		);
	}
}

IntegrationAutosuggest.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntegrationAutosuggest);