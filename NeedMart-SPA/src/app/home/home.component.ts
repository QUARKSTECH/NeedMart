import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  // location: number;
  // service: number;
  model: any = {};
  mySlideImages: any = [];
  mySlideOptions: any = {};
  serviceCarousalResponsive: any = {
    // breakpoint from 0 up
    0 : {items: 1, },
    // breakpoint from 640 up
    640 : {items: 2, },
    // breakpoint from 1024 up
    1024 : {items: 3, },
    // breakpoint from 1310 up
    1310 : {items: 4, },
  };
  serviceCarousalImagesSlides: any = [
    {
      path: '../../assets/images/post/img-1.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-2.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Appliance Repairs'
    },
    {
      path: '../../assets/images/post/img-3.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Beauty & Spa'
    },
    {
      path: '../../assets/images/post/img-4.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-5.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-6.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-7.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-8.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-9.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-10.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-11.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
    {
      path: '../../assets/images/post/img-12.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Repair My Home'
    },
];
  carouselCommonOptions: any = {
    item: 4,
    loop: true,
    dots: true,
    nav: true,
    margin : 40,
    autoplay: true,
    dotsClass: 'listar-sliderdots',
    navClass: ['listar-prev', 'listar-next'],
    navContainerClass: 'listar-slidernav',
    navText: ['<span class="icon-arrow-left2"></span>', '<span class="icon-arrow-right2"></span>'],
  };
  @ViewChild('owlElement') owlElement: OwlCarousel;

  constructor() {
    this.mySlideImages = this.serviceCarousalImagesSlides;
    this.mySlideOptions = this.carouselCommonOptions;
    this.mySlideOptions.responsive = this.serviceCarousalResponsive;
  }

  ngOnInit() {
    // this.collapseMenu();
    if ($('#listar-homeslider').length > 0) {
      const _listar_homeslider = $('#listar-homeslider');
      _listar_homeslider.owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dotsClass: 'listar-sliderdots',
        navClass: ['listar-prev', 'listar-next'],
        navContainerClass: 'listar-slidernav',
        navText: ['<span class="icon-chevron-left"></span>', '<span class="icon-chevron-right"></span>'],
      });
    }
  }

  createAppointment() {
    console.log(this.model);
  }
}
