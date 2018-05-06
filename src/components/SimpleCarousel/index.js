import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {withStyles} from 'material-ui/styles';
import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup} from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
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
	state = {
		currentSlide: 0
	};

	increment = slide => {
		this.setState({currentSlide: slide++});
	};

	render() {
		const {classes, slides, buttons, dots} = this.props;
		const {currentSlide} = this.state;
		const backBtnClasses = classnames(classes.changeButton, {
			hide: currentSlide > 0
		});
		return (
			<div className={classes.root}>
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={100}
					totalSlides={slides.length}
				>
					<Slider>
						{slides.map((slide, index) => (
							<Slide index={index} key={index}>{slide}</Slide>
						))}
					</Slider>
					{buttons && (
						<div className="flexRow flexNoWrap alignCenter justifyCenter">
							<ButtonBack className={backBtnClasses}>Back</ButtonBack>
							<ButtonNext>Next</ButtonNext>
						</div>
					)}
					{dots && <div className="flexRow flexNoWrap alignCenter justifyCenter p-16"><DotGroup/></div>}
				</CarouselProvider>
			</div>
		);
	}
}

SimpleCarousel.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCarousel);
