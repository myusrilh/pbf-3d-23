import Gambar1 from '../../assets/img/tm-about-img.jpg';
import Gambar2 from '../../assets/img/tm-img-310x180-1.jpg';
import Gambar3 from '../../assets/img/tm-img-310x180-2.jpg';
import Gambar4 from '../../assets/img/tm-img-310x180-3.jpg';
import Gambar5 from '../../assets/img/tm-img-310x180-4.jpg';

import Gambar6 from '../../assets/img/tm-img-660x330-1.jpg';

import Gambar7 from '../../assets/img/tm-img-240x120-1.jpg';
import Gambar8 from '../../assets/img/tm-img-240x120-2.jpg';
import Gambar9 from '../../assets/img/tm-img-240x120-3.jpg';

export default function HomePage(){
    return(
    <div>
        <div className="tm-home-img-container">
            <img src={Gambar1} className="hidden-lg-up img-fluid"/>
        </div>

        <section className="tm-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-xs-center">
                        <h2 className="tm-gold-text tm-title">Introduction</h2>
                        <p className="tm-subtitle">Suspendisse ut magna vel velit cursus tempor ut nec nunc. Mauris vehicula, augue in tincidunt porta, purus ipsum blandit massa.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-content-box">
                            <img src={Gambar2} alt="Image" className="tm-margin-b-20 img-fluid"/>
                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #1</h4>
                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                            consequat mauris dapibus id. Donec
                            scelerisque porttitor pharetra</p>
                            <a href="#" className="tm-btn text-uppercase">Detail</a>    
                        </div>  

                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-content-box">
                            <img src={Gambar3} alt="Image" className="tm-margin-b-20 img-fluid"/>
                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #2</h4>
                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                            consequat mauris dapibus id. Donec
                            scelerisque porttitor pharetra</p>
                            <a href="#" className="tm-btn text-uppercase">Read More</a>    
                        </div>  

                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-content-box">
                            <img src={Gambar4} alt="Image" className="tm-margin-b-20 img-fluid"/>
                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #3</h4>
                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                            consequat mauris dapibus id. Donec
                            scelerisque porttitor pharetra</p>
                            <a href="#" className="tm-btn text-uppercase">Detail</a>    
                        </div>  

                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">

                        <div className="tm-content-box">
                            <img src={Gambar5} alt="Image" className="tm-margin-b-20 img-fluid"/>
                            <h4 className="tm-margin-b-20 tm-gold-text">Lorem ipsum dolor #4</h4>
                            <p className="tm-margin-b-20">Aenean cursus tellus mauris, quis
                            consequat mauris dapibus id. Donec
                            scelerisque porttitor pharetra</p>
                            <a href="#" className="tm-btn text-uppercase">Read More</a>    
                        </div>  

                    </div>
                </div>

                <div className="row tm-margin-t-big">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="tm-2-col-left">
                            
                            <h3 className="tm-gold-text tm-title">Pellentesque fermentum mauris et posuere</h3>
                            <p className="tm-margin-b-30">Vivamus accumsan blandit ligula. Sed lobortis efficitur sapien</p>
                            <img src={Gambar6} alt="Image" className="tm-margin-b-40 img-fluid"/>
                            <p>
                                Donec tempor lobortis tortor, in feugiat massa facilisis sed. Ut dignissim viverra pretium. In eu justo maximus turpis feugiat finibus scelerisque nec eros. Cras nec lectus tempor nibh vestibulum eleifend et ac elit.
                            </p>
                            <p>Morbi vel pharetra massa, non iaculis tortor. Nulla porttitor tincidunt felis et feugiat. Vivamus fermentum ligula justo, sit amet blandit nisl volutpat id. Fusce sagittis ultricies felis, non luctus mauris lacinia quis.</p>
                            <p className="m-b-2"> Ut fringilla lacus ac tempor ullamcorper. Mauris iaculis placerat ex et mattis. Mauris id vulputate lectus, id fermentum sapien.
                            </p>
                            <a href="#" className="tm-btn text-uppercase">Read More</a>

                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">

                        <div className="tm-2-col-right">

                            <div className="tm-2-rows-md-swap">
                                <div className="tm-overflow-auto row tm-2-rows-md-down-2">
                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <h3 className="tm-gold-text tm-title">
                                            Categories
                                        </h3>
                                        <nav>
                                            <ul className="nav">
                                                <li><a href="#" className="tm-text-link">Tincidunt non faucibus placerat</a></li>
                                                <li><a href="#" className="tm-text-link">Vestibulum tempor ac lectus</a></li>
                                                <li><a href="#" className="tm-text-link">Fusce non turpis euismod</a></li>
                                                <li><a href="#" className="tm-text-link">Nam in augue consectetur</a></li>
                                                <li><a href="#" className="tm-text-link">Text Link Color #006699</a></li>
                                            </ul>
                                        </nav>    
                                    </div>

                                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 tm-xs-m-t">
                                        <h3 className="tm-gold-text tm-title">
                                            Useful Links
                                        </h3>
                                        <nav>
                                            <ul className="nav">
                                                <li><a href="#" className="tm-text-link">Suspendisse sed dui nulla</a></li>
                                                <li><a href="#" className="tm-text-link">Lorem ipsum dolor sit</a></li>
                                                <li><a href="#" className="tm-text-link">Duiss nec purus et eros</a></li>
                                                <li><a href="#" className="tm-text-link">Etiam pulvinar et ligula sed</a></li>
                                                <li><a href="#" className="tm-text-link">Proin egestas eu felis et iaculis</a></li>
                                            </ul>
                                        </nav>    
                                    </div>
                                </div>                        
                                
                                <div className="row tm-2-rows-md-down-1 tm-margin-t-mid">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <h3 className="tm-gold-text tm-title tm-margin-b-30">Related Posts</h3>
                                        <div className="media tm-related-post">
                                        <div className="media-left media-middle">
                                            <a href="#">
                                            <img className="media-object" src={Gambar7} alt="Generic placeholder image"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                                            <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                                        </div>
                                        </div>
                                        <div className="media tm-related-post">
                                        <div className="media-left media-middle">
                                            <a href="#">
                                            <img className="media-object" src={Gambar8} alt="Generic placeholder image"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                                            <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                                        </div>
                                        </div>
                                        <div className="media tm-related-post">
                                        <div className="media-left media-middle">
                                            <a href="#">
                                            <img className="media-object" src={Gambar9} alt="Generic placeholder image"/>
                                            </a>
                                        </div>
                                        <div className="media-body">
                                            <a href="#"><h4 className="media-heading tm-gold-text tm-margin-b-15">Lorem ipsum dolor</h4></a>
                                            <p className="tm-small-font tm-media-description">Aenean cursus tellus mauris, quis consequat mauris dapibus id. Donec scelerisque porttitor pharetra.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>

                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    </div>
    );
}  