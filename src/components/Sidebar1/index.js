import React from 'react';
import PropTypes from 'prop-types';
import SIZES from '../../constants/SIZES';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { mailFolderListItems, otherMailFolderListItems } from '../SidebarMenu';


const styles = theme => ({
	hide: {
		display: 'none'
	},
	drawerPaper: {
		position: 'relative',
		width: SIZES.drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	}
});

class Sidebar extends React.Component {
	
	_handleSidebar = event => {
		const { handleSidebar } = this.props;
		handleSidebar(event);
	};
	
	render() {
		const { classes, theme, anchor, sidebarOpen } = this.props;
		return (
			<div>
				<Drawer
					variant="persistent"
					anchor={anchor}
					open={sidebarOpen}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this._handleSidebar}>
							{theme.direction === 'rtl' ?
								<ChevronRightIcon/> :
								<ChevronLeftIcon/>}
						</IconButton>
					</div>
					<Divider/>
					<List>{mailFolderListItems}</List>
					<Divider/>
					<List>{otherMailFolderListItems}</List>
				</Drawer>
			</div>
		);
	}
}

Sidebar.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar);
