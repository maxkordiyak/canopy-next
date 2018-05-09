import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup} from 'pure-react-carousel';
import './index.css';

const styles = theme => ({
	root: {
		width: '100%'
	},
	hide: {
		display: 'none'
	}
});

class SimpleCarousel extends React.Component {

	render() {
		const {classes, slides, buttons, dots} = this.props;
		return (
			<div className={classes.root}>
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={80}
					totalSlides={slides.length}
				>
					<Slider>
						{slides.map((slide, index) => (
							<Slide index={index} key={index}>{slide}</Slide>
						))}
					</Slider>
					{buttons && (
						<div className="flexRow flexNoWrap alignCenter justifyCenter">
							<ButtonBack>Back</ButtonBack>
							<ButtonNext>Next</ButtonNext>
						</div>
					)}
					{dots && <div className="flexRow flexNoWrap alignCenter justifyCenter pt-16"><DotGroup/></div>}
				</CarouselProvider>
			</div>
		);
	}
}

SimpleCarousel.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCarousel);
