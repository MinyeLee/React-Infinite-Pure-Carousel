import React from 'react';
import CarouselItem from './CarouselItem';
import MockUpData from "../assets/mockupdata.json";

class Test extends React.Component {
  state = {
    slides: [
      { order: -1, text: "6" },
      { order: 0, text: "1" },
      { order: 1, text: "2" },
      { order: 2, text: "3" },
      { order: 3, text: "4" },
      { order: 4, text: "5" }
    ],
    slideCount: 3,
    sliding: false,
    direction: 0,
    slides: MockUpData
  };

  handleNext = () => {
    this.setState({ sliding: true, direction: 1 }, () => {
      setTimeout(() => {
        this.setState((prevState) => {
          let oldSlides = [...prevState.slides];
          let hiddenSlide = oldSlides.shift();
          let newHiddenSlide = {
            ...hiddenSlide,
            order: oldSlides[oldSlides.length - 1].order + 1
          };
          oldSlides.push(newHiddenSlide);
          const slides = oldSlides.map(s => {
            return { ...s, order: s.order - 1 };
          });
          return { slides, sliding: false };
        });
      }, 500);
    });
  };

  handlePrev = () => {
    // always have a previous slide beforehand
    this.setState({ sliding: true, direction: -1 }, () => {
       setTimeout(() => {
        this.setState((prevState) => {
          let slides = [...prevState.slides];

          // pop off last slide to attach another one
            let lastSlide = slides.pop();
          // set its order to -1
            lastSlide = { ...lastSlide, order: -1 };
          // sync order of slides
          slides = slides.map(s => {
            return { ...s, order: s.order + 1 };
          });
          // add popped slide back on
            slides.unshift(lastSlide);

           return { slides, sliding: false };
         });
       }, 500);
     });
  };

  render() {
    const { slides, slideCount, sliding, direction } = this.state;
    const slideActionStyle = sliding
    ? direction > 0
      && {
        transform: "translateX(-400px)",
        transition: "transform 500ms ease-in"
      }
      ||
      {
        transform: "translateX(0px)",
        transition: "transform 500ms ease-in"
      }
    : {};

    return (
      <div>
        <div className="left-btn" onClick={!sliding && this.handlePrev}>
          <i className="fa fa-arrow-left fa-3x"></i>
        </div>
        <div
          className="item-carousel"
          style={slideActionStyle}
        >
        {this.state.slides.map((comp, i) => {
            return (<CarouselItem
              styleName={ comp.styleName }
              url = { comp.info.url }
              image = { comp.info.image }
              title = { comp.title }
              summary = { comp.summary }
              key = { i }
              isActive = { this.state.activeIndex === i}
              direction = { this.state.direction }
              />
            );
          })
         }
        </div>
        <div className="right-btn" onClick={!sliding && this.handleNext}>
          <i className="fa fa-arrow-right fa-3x"></i>
        </div>
      </div>
    ); //return
  }
};




export default Test;
