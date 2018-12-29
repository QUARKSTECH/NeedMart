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
  recServiceImageSlides: any = [
    {
    path: '../../assets/images/newimage/18.jpeg',
    url: 'Fix_Repairs.html',
    label: 'Renatal car'
    },
    {
      path: '../../assets/images/newimage/19.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Pharmacy'
    },
    {
      path: '../../assets/images/newimage/first.jpeg',
      url: 'Fix_Repairs.html',
      label: 'First Aid Box'
    },
    {
      path: '../../assets/images/newimage/20.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Laundry'
    },
    {
      path: '../../assets/images/newimage/21.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Education'
    },
    {
      path: '../../assets/images/newimage/22.jpeg',
      url: 'Fix_Repairs.html',
      label: 'House Painting'
    }
  ];
  fixRepairImagesSlides: any = [
    {
    path: '../../assets/images/newimage/3.jpg',
    url: 'Fix_Repairs.html',
    label: 'Electrical'
    },
    {
      path: '../../assets/images/newimage/4.jpg',
      url: 'Fix_Repairs.html',
      label: 'Plumbing'
    },
    {
      path: '../../assets/images/newimage/1.jpg',
      url: 'Fix_Repairs.html',
      label: 'T.V.'
    },
    {
      path: '../../assets/images/newimage/2.jpg',
      url: 'Fix_Repairs.html',
      label: 'Computer / Laptop'
    }
  ];
  appliancesImagesSlides: any = [
    {
    path: '../../assets/images/newimage/5.jpg',
    url: 'Fix_Repairs.html',
    label: 'Washing Machine'
    },
    {
      path: '../../assets/images/newimage/6.jpg',
      url: 'Fix_Repairs.html',
      label: 'Air Conditioner'
    },
    {
      path: '../../assets/images/newimage/7.jpg',
      url: 'Fix_Repairs.html',
      label: 'Refrigerator'
    },
    {
      path: '../../assets/images/newimage/8.jpg',
      url: 'Fix_Repairs.html',
      label: 'Water Purifier'
    },
    {
      path: '../../assets/images/newimage/9.jpg',
      url: 'Fix_Repairs.html',
      label: 'Microwave Oven'
    }
  ];
  beautySpaImagesSlides: any = [
    {
    path: '../../assets/images/newimage/10.jpg',
    url: 'Fix_Repairs.html',
    label: 'Salon at Home'
    },
    {
      path: '../../assets/images/newimage/11.jpg',
      url: 'Fix_Repairs.html',
      label: 'Makeup & Hair Style'
    },
    {
      path: '../../assets/images/newimage/12.jpg',
      url: 'Fix_Repairs.html',
      label: 'Mehandi'
    }
  ];
  groceryImagesSlides: any = [
    {
    path: '../../assets/images/newimage/13.jpg',
    url: 'Fix_Repairs.html',
    label: 'Grocery'
    },
    {
      path: '../../assets/images/newimage/14.jpg',
      url: 'Fix_Repairs.html',
      label: 'Fruits & Vegetables'
    },
    {
      path: '../../assets/images/newimage/15.jpg',
      url: 'Fix_Repairs.html',
      label: 'Personal Care'
    },
    {
      path: '../../assets/images/newimage/16.jpg',
      url: 'Fix_Repairs.html',
      label: 'Baby & Kids'
    },
    {
      path: '../../assets/images/newimage/17.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Home & Kitchen'
    }
  ];
  weddingImagesSlides: any = [
    {
    path: '../../assets/images/newimage/23.jpeg',
    url: 'Fix_Repairs.html',
    label: 'Bridal Makeup'
    },
    {
      path: '../../assets/images/newimage/24.jpeg',
      url: 'Fix_Repairs.html',
      label: 'MakeUp & Hair for Party'
    },
    {
      path: '../../assets/images/newimage/25.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Mehandi'
    },
    {
      path: '../../assets/images/newimage/26.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Photography & Video'
    },
    {
      path: '../../assets/images/newimage/27.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Party  Decoratings'
    },
    {
      path: '../../assets/images/newimage/28.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Cake for Pantry'
    },
    {
      path: '../../assets/images/newimage/29.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Flower Baskets'
    },
    {
      path: '../../assets/images/newimage/30.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Car Decoratings'
    }
  ];
  iTServiceImagesSlides: any = [
    {
    path: '../../assets/images/newimage/31.jpeg',
    url: 'Fix_Repairs.html',
    label: 'Website Designing'
    },
    {
      path: '../../assets/images/newimage/32.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Mobile App Development'
    },
    {
      path: '../../assets/images/newimage/33.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Web Hosting'
    },
    {
      path: '../../assets/images/newimage/34.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Domain Registration'
    },
    {
      path: '../../assets/images/newimage/35.jpeg',
      url: 'Fix_Repairs.html',
      label: 'SEO/SMO'
    },
    {
      path: '../../assets/images/newimage/36.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Bulk SMS Services'
    },
    {
      path: '../../assets/images/newimage/37.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Digital Marketing'
    }
  ];
  businessImagesSlides: any = [
    {
    path: '../../assets/images/newimage/38.jpeg',
    url: 'Fix_Repairs.html',
    label: 'Private DL'
    },
    {
      path: '../../assets/images/newimage/39.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Commercial DL'
    },
    {
      path: '../../assets/images/newimage/40.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Commercial Tax'
    },
    {
      path: '../../assets/images/newimage/41.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Permit'
    },
    {
      path: '../../assets/images/newimage/42.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Pollution'
    },
    {
      path: '../../assets/images/newimage/43.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Fitness'
    },
    {
      path: '../../assets/images/newimage/44.jpeg',
      url: 'Fix_Repairs.html',
      label: 'Tax'
    }
  ];
  testimonialByImagesSlides: any = [
    {
    path: '../../assets/images/test2.png',
    shortComment: 'Good Service',
    // tslint:disable-next-line:max-line-length
    comments: 'It is the best stage for working together. Get need on Google seek by means of Need Mart posting. Simple to alter and refresh your items whenever. Exceptionally easy to use interface. It was valuable for me as new business I made more than I pay to them.',
    name: 'Ram Kishor',
    type: 'Customer',
    },
    {
      path: '../../assets/images/test3.png',
      shortComment: 'Great Experience',
      // tslint:disable-next-line:max-line-length
      comments: 'So far this has been the most accommodating application to me. It completed my work. Client care is great and they get in touch with you actually which makes things much simpler. I trust they will keep on giving such administrations in future likewise and isnt constrained for newcomers just.',
      name: 'Raj Kumar',
      type: 'Customer',
    },
    {
      path: '../../assets/images/test.png',
      shortComment: 'Satisfied Service',
      // tslint:disable-next-line:max-line-length
      comments: 'Its really useful. Didnt expect such an extensive amount straightforwardness. You rock and thank you for your reasonable clarification about Need Mart.',
      name: 'Rakesh Gupta',
      type: 'Customer',
    },
    {
      path: '../../assets/images/test.png',
      shortComment: 'Good for Local',
      comments: 'My most extreme purchaser work have been finished on this side, at very reasonable rate. Very Much appreciated Need Mart.',
      name: 'Satish Kumar',
      type: 'Customer',
    }
  ];
  trustedByImagesSlides: any = [
    {
    path: '../../assets/images/newimage/comp.jpg',
    url: '',
    label: ''
    },
    {
      path: '../../assets/images/newimage/comp.jpg',
      url: '',
      label: ''
    },
    {
      path: '../../assets/images/newimage/comp.jpg',
      url: '',
      label: ''
    }
  ];

  @ViewChild('owlElement') owlElement: OwlCarousel;
  @ViewChild('owlElement') owlRecElement: OwlCarousel;
  @ViewChild('owlElement') owlFixRepairElement: OwlCarousel;
  @ViewChild('owlElement') owlAppliancesElement: OwlCarousel;
  @ViewChild('owlElement') owlBeautyElement: OwlCarousel;
  @ViewChild('owlElement') owlGroceryElement: OwlCarousel;
  @ViewChild('owlElement') owlWeddingElement: OwlCarousel;
  @ViewChild('owlElement') owlItServiceElement: OwlCarousel;
  @ViewChild('owlElement') owlBusinessElement: OwlCarousel;
  @ViewChild('owlElement') owlTestimonialElement: OwlCarousel;
  @ViewChild('owlElement') owlTrustedByElement: OwlCarousel;

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
