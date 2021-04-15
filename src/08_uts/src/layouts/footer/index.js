import React from 'react';
import GambarFooter1 from '../../assets/img/tm-img-100x100-1.jpg';
import GambarFooter2 from '../../assets/img/tm-img-100x100-2.jpg';
import GambarFooter3 from '../../assets/img/tm-img-100x100-3.jpg';
import GambarFooter4 from '../../assets/img/tm-img-100x100-4.jpg';
import GambarFooter5 from '../../assets/img/tm-img-100x100-5.jpg';
import GambarFooter6 from '../../assets/img/tm-img-100x100-6.jpg';

export default function Footer(){
    return(
        <footer className="tm-footer">
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        
                        <div className="tm-footer-content-box">
                            <h3 className="tm-gold-text tm-title tm-footer-content-box-title">Proin eu posuere felis</h3>
                            <div className="tm-gray-bg">
                                <p>Classic is free HTML CSS website template provided by templatemo for everyone. Feel free to use it.</p>
                                <p>Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                                <p><strong>Danny Egg (Executive)</strong></p>    
                            </div>    
                        </div>
                                                
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="tm-footer-content-box tm-footer-links-container">
                        
                            <h3 className="tm-gold-text tm-title tm-footer-content-box-title">Nulla tortor dolor</h3>
                            <nav>
                                <ul className="nav">
                                    <li><a href="#" className="tm-footer-link">Tincidunt non faucibus</a></li>
                                    <li><a href="#" className="tm-footer-link">Vestibulum tempor</a></li>
                                    <li><a href="#" className="tm-footer-link">Fusce non turpis euismod</a></li>
                                    <li><a href="#" className="tm-footer-link">Lorem ipsum dolor sit</a></li>
                                    <li><a href="#" className="tm-footer-link">Nam in augue consectetur</a></li>
                                    <li><a href="#" className="tm-footer-link">Text Link Color #CCCC66</a></li>
                                </ul>
                            </nav>

                        </div>
                        
                    </div>

                    
                    <div className="clearfix hidden-lg-up"></div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-footer-content-box">
                        
                            <h3 className="tm-gold-text tm-title tm-footer-content-box-title">Etiam mollis ornare</h3>
                            <p className="tm-margin-b-30">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p><hr className="tm-margin-b-30"/>
                            <p className="tm-margin-b-30">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p><hr className="tm-margin-b-30"/>
                            <p className="tm-margin-b-30">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                            <a href="#" className="tm-btn tm-btn-gray text-uppercase">Read More</a>

                        </div>
                        
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-footer-content-box">
                        
                            <h3 className="tm-gold-text tm-title tm-footer-content-box-title">Fusce non turpis</h3>
                            <div className="tm-margin-b-30">
                                <img src={GambarFooter1} alt="Image" className="tm-footer-thumbnail"/>
                                <img src={GambarFooter2} alt="Image" className="tm-footer-thumbnail"/>
                                <img src={GambarFooter3} alt="Image" className="tm-footer-thumbnail"/>
                                <img src={GambarFooter4} alt="Image" className="tm-footer-thumbnail"/>
                                <img src={GambarFooter5} alt="Image" className="tm-footer-thumbnail"/>
                                <img src={GambarFooter6} alt="Image" className="tm-footer-thumbnail"/>
                            </div>
                            <p className="tm-margin-b-20">Curabitur dui massa, aliquam quis mi sed, tempor vulputate tellus. Sed vestibulum non neque.</p>
                            <a href="#" className="tm-btn tm-btn-gray text-uppercase">Browse</a>

                        </div>
                        
                    </div>


                </div>

                <div className="row">
                    <div className="col-xs-12 tm-copyright-col">
                        <p className="tm-copyright-text">Copyright 2016 Your Company Name</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}