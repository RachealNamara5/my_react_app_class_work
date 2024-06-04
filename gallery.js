import React from "react";

class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <h1> My Sweet Image Gallery</h1>
                <div className="image-container">
                    
                 <img src={require('../images/quote3.jpg')} alt="quote3" />
                <img src={require('../images/snack1.jpg')} alt="snack1" />
                <img src={require('../images/milk.jpg')} alt="milk" />
                <img src={require('../images/juice2.jpg')} alt="juice2" />
                

                </div>
            </div>
        );
    }
}

export default Gallery;


