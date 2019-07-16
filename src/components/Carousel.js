import React from 'react';
//Desktop
import CarouselItem from './CarouselItem';
//Mobile
import CarouselMobileItem from './CarouselMobileItem';
import Slider from 'react-slick';
// Assets
import MockUpData from '../assets/mockupdata.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import axios from "axios";
//const MockUpDataEndPoint = "https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/homework/data.json";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            totalLen: 3, // needs to be update!
            sliding: false,
            direction: 'default',
            isUp: 'yes',
            event_: 'default',
            width: window.innerWidth,
            companyList_RC: MockUpData
        };
    }

    prevSlide = (e) => {

      e.preventDefault();
      if(this.state.activeIndex !== 0){
        this.setState({ activeIndex: this.state.activeIndex -1 });
      }else{
        this.setState({ activeIndex: this.state.totalLen-1 });

        setTimeout(() => {
         this.setState((prevState) => {
           let slides = [...prevState.companyList_RC];
             let lastSlide = slides.pop();
             lastSlide = { ...lastSlide, order: -1 };
           slides = slides.map(s => {
             return { ...s, order: s.order + 1 };
           })
             slides.unshift(lastSlide);
            return { slides };
          });
        }, 500);

      }
      this.setState({ direction: "prev" });
    }

    nextSlide = (e) => {
      e.preventDefault();
      if(this.state.activeIndex !== this.state.totalLen-1){
        this.setState({ activeIndex: this.state.activeIndex +1 });
      }else{
        this.setState({ activeIndex: 0 });

        setTimeout(() => {
          this.setState((prevState) => {
            let oldSlides = [...prevState.companyList_RC];
            let hiddenSlide = oldSlides.shift();
            let newHiddenSlide = {
              ...hiddenSlide,
              order: oldSlides[oldSlides.length - 1].order + 1
            };
            oldSlides.push(newHiddenSlide);
            const slides = oldSlides.map(s => {
              return { ...s, order: s.order - 1 };
            });
            return { slides };
          });
        }, 500);

      }
      this.setState({ direction: "next" });

    }
    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);

    }


    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    }

    mouseOut() {
      this.setState({event_: 'mouseout'});
    }

    mouseOver() {
      this.setState({event_: 'mouseover'});
    }

    mouseDownMobile(){
      console.log('mooousedown');
      this.setState({sliding: true});
      this.setState({event_: 'default'});
    }
    mouseMoveMobile= (e) =>{
      // this.setState({event_: 'default'});
      if(this.state.event_==='up'){
        this.setState({event_: 'default'});
      }
      if(this.state.sliding){

        if(e.nativeEvent.offsetX > this.state.width /2){
          console.log('right');
          // if(this.state.activeIndex !== this.state.totalLen-1){
          //   this.setState({ activeIndex: this.state.activeIndex +1 });
          // }else{
          //   this.setState({ activeIndex: 0 });
          // }
          this.setState({direction: 'right'});

        }else if(e.nativeEvent.offsetX < this.state.width /2){
          console.log('left');
          // if(this.state.activeIndex !== 0){
          //   this.setState({ activeIndex: this.state.activeIndex -1 });
          // }else{
          //   this.setState({ activeIndex: this.state.totalLen-1 });
          // }
          this.setState({direction: 'left'});
        }

      }

    }
    mouseUpMobile(){
      //direction
      if(this.state.direction ==='left'){
        if(this.state.activeIndex !== 0){
          this.setState({ activeIndex: this.state.activeIndex -1 });
        }else{
          this.setState({ activeIndex: this.state.totalLen-1 });
        }

      }else if(this.state.direction ==='right'){
        if(this.state.activeIndex !== this.state.totalLen-1){
          this.setState({ activeIndex: this.state.activeIndex +1 });
        }else{
          this.setState({ activeIndex: 0 });
        }
      }
      console.log('up');
      this.setState({event_: 'up'});
    }

    render(){
        const { activeIndex, totalLen, sliding, direction, isUp, event_, width, companyList_RC} = this.state;
        const isMobile = width <= 768;


        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: true,

        };

        if(isMobile){
          return  (
            // <div className="slide" onMouseDown={() => this.mouseDownMobile()} onMouseMove={this.mouseMoveMobile.bind(this)} onMouseUp={() => this.mouseUpMobile()}  >
            //   <div style={{left: this.state.left + 'px'}} className={"carousel-inner-mobile "+direction+"_"+activeIndex+" "+event_  } >
            //     {this.state.companyList_RC.map((comp, i) => {
            //         return (<CarouselMobileItem
            //           styleName={ comp.styleName }
            //           url = { comp.info.url }
            //           image = { comp.info.image }
            //           title = { comp.title }
            //           summary = { comp.summary }
            //           key = { comp.order }
            //           isActive = { this.state.activeIndex === i}
            //           direction = { this.state.direction }
            //           />
            //         );
            //       })
            //      }
            //   </div>
            // </div>
            <Slider {...settings} >
              {this.state.companyList_RC.map((comp, i) => {
                  return (<CarouselMobileItem
                    styleName={ comp.styleName }
                    url = { comp.info.url }
                    image = { comp.info.image }
                    title = { comp.title }
                    summary = { comp.summary }
                    key = { comp.order }
                    isActive = { this.state.activeIndex === i}
                    direction = { this.state.direction }
                    />
                  );
                })
               }
            </Slider>
          ); //return
        }else{
          return  ( //onMouseMove={this._onMouseMove.bind(this)
            <div className="carousel slide" data-ride="carousel" onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
              <div className={"carousel-inner "+direction+"_"+activeIndex+" "+event_  }>
                {this.state.companyList_RC.map((comp, i) => {
                    return (<CarouselItem
                      styleName={ comp.styleName }
                      url = { comp.info.url }
                      image = { comp.info.image }
                      title = { comp.title }
                      summary = { comp.summary }
                      key = { comp.order }
                      isActive = { this.state.activeIndex === i}
                      direction = { this.state.direction }
                      />
                    );
                  })
                 }
              </div>
              <div className="carousel-control">
                <div className="carousel-control-prev" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" onClick={this.prevSlide}  aria-hidden="true"></span>
                </div>
                <div className="carousel-control-next" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" onClick={this.nextSlide}  aria-hidden="true"></span>
                </div>
              </div>
            </div>
          ); //return
        } //else

    }//render
}

export default Carousel;
