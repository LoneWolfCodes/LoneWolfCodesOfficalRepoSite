/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';


const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/portfolio/project2/1.jpg" layout='fill' />
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/portfolio/project2/2.jpg" layout='fill' />
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/portfolio/project2/3.jpg"  layout='fill'/>
          </a>
          <a href="#" className="col-md-3 popimg">
            <Image alt="" src="/img/portfolio/project2/5.jpg" layout='fill'/>
          </a>
          <a href="#" className="col-md-12 popimg">
            <Image alt="" src="/img/portfolio/project2/7.jpg" layout='fill'/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
