import React from 'react';
import ChevronRight from "../assets/chevron-right.svg";

class CarouselItem extends React.Component {

    render(){
        return  (
        <div className={ "carousel-item c-p "+(this.props.isActive ? "active" : "inactive" ) } >
          <a
            href={this.props.url}>
            <img
                src={this.props.image}
                className="d-block w-100 h-300p"
                alt="..." />
                <div className="card b-10 left">
                  <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <h3 className="card-subtitle mb-2 text-muted">{this.props.summary}</h3>
                  </div>
                  <div className="card-footer">
                    <div className="card-link">바로가기<img className="chevron-right" src={ChevronRight} alt="chevronright" /></div>
                  </div>
                </div>
          </a>
        </div>
        );
    }
}

export default CarouselItem;
