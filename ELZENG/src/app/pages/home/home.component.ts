import { Component, OnInit } from '@angular/core';
// import {CarouselComponent} from '../../components/carousel/carousel.component';
// import {NgForOf} from '@angular/common';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    SlickCarouselModule,
    CarouselComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    
      window.scrollTo(0, 0); // Reset scroll to top on route change
    };
  



  addSlide() {
    this.slides.push({
      description: 'Elevate your brand with our music promotions.',
      primaryLink: '/music',
      primaryText: 'View Artists',
      secondaryLink: '/careers',
      secondaryText: 'Learn More',
      title: 'Welcome to Elzeng Music',
      image: "assets/images/image5.jpg"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized', e);
  }

  breakpoint(e: any) {
    console.log('breakpoint', e);
  }

  afterChange(e: any) {
    console.log('afterChange', e);
  }

  beforeChange(e: any) {
    console.log('beforeChange', e);
  }
slides = [
  {
    image: 'assets/images/image1.jpg',
    title: 'Welcome to Elzeng Music',
    description: 'Discover our latest music releases and events.',
    primaryText: 'Listen Now',
    primaryLink: '/music',
    secondaryText: 'Learn More',
    secondaryLink: '/about'
  },
  {
    image: 'assets/images/image2.jpg',
    title: 'Join Elzeng Promotions',
    description: 'Elevate your brand with our music promotions.',
    primaryText: 'Get Started',
    primaryLink: '/promotions',
    secondaryText: 'Contact Us',
    secondaryLink: '/contact'
  },
  {
    image: 'assets/images/image3.jpg',
    title: 'Meet Our Management Team',
    description: 'We manage top artists in the industry.',
    primaryText: 'View Artists',
    primaryLink: '/management',
    secondaryText: 'Work With Us',
    secondaryLink: '/careers'
  }
];


slideConfig = {

  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
};

}
