import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default class Home extends Component {
  render() {

    const options = {
        loop: false,
        margin: 0,
        items: 1,
        autoplay: true,
        dots: true,
        autoplay: false
    };



    return (
        <div>
            <Helmet>
                <title>3M car care surat | A Unit of Autohub Car services</title>
            <meta name="description" content="3Mcarcare" />
            <body id="page-home" />
        </Helmet>
            <section className='car-image'>
                
                <OwlCarousel className="owl-theme" {...options} >
                    <div className='slide-1'>  
                        <div className='slide-img'>
                            <img src='/assets/img/3m-car-1.jpeg' alt='3m-car-1' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div> 
                    </div>
                    <div className='slide-2'>  
                        <div className='slide-img'>
                            <img src='/assets/img/3m-car-2.jpeg' alt='3m-car-2' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div> 
                    </div>
                    <div className='slide-3'>  
                        <div className='slide-img'>
                            <img src='/assets/img/3m-car-3.jpeg' alt='3m-car-3' />   
                            <div className='slider-overlay-amethyst'></div>  
                        </div> 
                    </div>
                </OwlCarousel>
               
            </section>
            <section>
                <div className='about container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </section>
            <article className="content">
            <section className="content__descriptor">
        <h2 className="content__title">About US</h2>
      </section>
      <section className="content__text-box">
        <p className="content__text">
        3M is fundamentally a science-based company producing the most imaginative products. Our success begins with our ability to apply our technologies - often in combination - to an endless array of customers car maintenance needs. The 3M Car Care Store is a place where technology, people and car care converge. This is where a car owner comes to appreciate the tremendous power of technology and 3M’s great belief in human connect While we pride ourselves in the science that goes into development of each of the products used at a 3M Car Car Store, it is also our endeavour that our customers understand what we have to offer in the smallest detail possible; This could be in the form of what products we use at these stores, what process we adopt or even the chemistry and the physical science behind what makes 3M products work so well So when you visit a 3M Car Care Store, you would meet a Store Manager who has soaked the 3M culture so well that sometimes he goes overboard in explaining what wonders 3M products can do on your car.
        </p>
        <p className="content__text">
        Do excuse him if you find him too excited about his 3M Car Care Store, for they have been trained to talk with the customers about anything but selling! If you do happen to pick one of the several 3M car treatments, we bet you will, you can relax in the customer lounge and see your car getting transformed into a beauty. You have the option of reading, watching your favourite TV channel or working on your computer in a wi-fi enabled environment while you sip a cup of coffee. Of course…the Store Manager would be around if you wish to know more about “Keeping Your Car Looking New”.
        </p>
      </section>
       </article> 
    <section className='ser'>
        <div className='container'>
            <div className='row'>
                <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M CERAMIC COATING</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M EXTERIOR COATING TREATMENT</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M FOAM WASH</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M ANTI CORROSSION TREATMENT</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M INTERIOR TREATMENT</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M NOMAD MATTING</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M SUNFILM</h3>
          </div>
        </div>
    
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M PAINT PROTECTION FILM</h3>
          </div>
        </div>
        <div className='column col-lg-4 col-md-4 col-sm-12 col-xs-12'>
                
          <div className="card">
            <div className="icon-wrapper">
              <i className="fa fa-wrench"></i>
            </div>
            <h3>3M CAR CARE PRODUCTS</h3>
          </div>
        </div>
            </div>
        </div>
    </section>

               
      </div>
    )
  }
}
