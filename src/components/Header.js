import React from 'react';
function Header() {
    return (
            <header id="masthead" className=" ">
                <div className="container-fuild">
                    <nav className="navbar  navbar-light bacg-light">
                        <a className="navbar-brand mt-2 mt-lg-0" href="#">
                            <img src="/assets/img/3m-logo.jpg"  className="d-inline-block align-top" alt="logo" />
                        </a>
                        <div className="Social-media">
                        <a href="https://www.facebook.com/3mcarcaresurat" className='soc-med'><i className="fa fa-facebook"></i></a>
                        <a href="https://www.instagram.com/3mcarcare.surat/" className='soc-med'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/watch?v=zrB9AHE0kKY&t=5s" className='soc-med'><i className="fa fa-youtube"></i></a>
                        </div>

                    </nav>
                </div>
            </header>
            
    )
}

export default Header
