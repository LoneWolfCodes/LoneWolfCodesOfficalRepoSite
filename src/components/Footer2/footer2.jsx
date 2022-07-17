import React from "react";
import Link from "next/link";
// import appData from "../../data/app.json";
import DarkTheme from "../../layouts/Dark";
import Image  from 'next/image';

import Head from "next/head";
const Footer2 = () => {
  return (
    <footer className="app-footer" data-overlay-dark="0">
      <div className="container">
        <div className="row">
        {/* <div className="circle-blur1"></div> */}
      {/* <div className="circle-blur2"></div> */}

        <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>34 Pickerill St, Retreat, Cape Town, 7965</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email me</h6>
                    <p>lonewolfcodes56@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Howell at me</h6>
                    <p>+27 21 709 0248</p>
                  </div>
                </li>
              </ul>
            </div>

        
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
              <h5>Subscribe to Lone Wolf Blogs </h5>

              </div>
              
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
                <br/>
                <br/>

              <div className="title  Copy-right">
                <p>
                   Made by Caleb Mutombo.  <span/> <span/> At Lone Wolf Codes. <span/> <span/>
                   <Link href="/LoneWolfCodes/Team-dark">
                    <a> <span/>My code Is your command!</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item md-mb50">
               <div className="title"> 
                 <h5>Lone Wolf Bolgs</h5> 
              </div>

              <ul>
                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <Image width={900} height={700} src="/img/blog/pexels-andrea-piacquadio-3813341-min.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                        Why you should become a freelancer.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                        <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div className="img">
                    <Link href="/blog/blog-dark">
                      <a>
                        <Image width={900} height={700} src="/img/blog/surface-nUHs5rcX9fo-unsplash-min-min.jpg" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog/blog-dark">
                      <a>
                        <p>
                        Why you should not become a freelancer.
                        </p>
                      </a>
                    </Link>
                    <Link href="/blog/blog-dark">
                      <a>
                      <span className="date">LONE WOLF BLOGS</span> <h6>coming soon...</h6>
                      </a>
                    </Link>
                  </div>
                </li> 

                <br/>
                <br/>
                <br/>


               
              </ul>
            </div>
          </div>
                <div className="container">

        <div className="row">
         
          

          <div className="col-lg-3 col-md-6">
            <div className="item-clumn links md-mb50">
              <h5 className="title">Resources</h5>
              <ul>
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/LoneWolfCodes/Home-dark">
                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/LoneWolfCodes/Team-dark">
                    <a>Team</a>
                  </Link>
                </li>

                
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/Portfolio/Portfolio-dark">
                    <a>Portfolio</a>
                  </Link>
                </li>

                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/LoneWolfCodes/Process-dark">
                    <a>Process</a>
                  </Link>
                </li>

                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/about/about-dark">
                    <a>About</a>
                  </Link>
                </li>
             
           

              
              </ul>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <div className="item-clumn links sm-mb50">
              <h5 className="title">Links</h5>
            <ul>

               <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/contact/contact-dark">
                    <a>Contact</a>
                  </Link>
                </li>

                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/blog/blog-dark">
                    <a>Blog</a>
                  </Link>
                </li>

                
                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/LoneWolfCodes/FAQ">
                    <a>FAQ</a>
                  </Link>
                </li>


                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/T&C-list/T&C-list-dark">
                    <a>T&C</a>
                  </Link>
                </li>

                <li>
                  <span className="icon pe-7s-angle-right"></span>
                  <Link href="/Price/Price-Details-dark">
                    <a>Price</a>
                  </Link>
                </li>

              </ul>
              </div>
          </div>

            
          <div className="item-clumn links">
              <h5 className="title mb-30">Social Links</h5>

              <div className="item">
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div>

            </div>
            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div>
            </div>
            <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </div>
           

              
          <div className="col-lg-4 col-md-6">
            <div className="item-clumn our md-mb50">
              <a href="#0" className="logo-brand mb-50">
                <Image width={5000} height={5000} src="/img/logo.png" alt="" />
              </a>
              <p>
              My code is your command.
              </p>
            </div>
          </div>

          <div className="item">
          
          </div>
            </div>
      </div>
  
        </div>
      </div>
            <div className="circle-blur"></div>
      <div className="circle-blur two"></div>

<br/>
      <div className="text-center">
         <p>© 2022 Lone Wolf Codes. All Rights Reserved</p>
        </div>
    </footer>
  );
};

<DarkTheme mobileappstyle/>

export default Footer2;
