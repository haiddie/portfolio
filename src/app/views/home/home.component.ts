import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import SwiperCore, {
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ToastrService } from 'ngx-toastr';
SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('swiper') swiper!: SwiperComponent;
  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: false,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    grabCursor: true,
    // breakpoints: {
    //   280: {
    //     slidesPerView: 1.2,
    //     spaceBetween: 2,
    //   },
    //   320: {
    //     slidesPerView: 1.2,
    //     spaceBetween: 2,
    //   },
    //   350: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 2,
    //   },
    //   370: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 2,
    //   },
    //   390: {
    //     slidesPerView: 1.7,
    //     spaceBetween: 2,
    //   },
    //   480: {
    //     slidesPerView: 1.8,
    //     spaceBetween: 2,
    //   },
    //   576: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   610: {
    //     slidesPerView: 2.4,
    //     spaceBetween: 10,
    //   },
    //   640: {
    //     slidesPerView: 2.2,
    //     spaceBetween: 10,
    //   },
    //   768: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 2,
    //   },
    //   1024: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 10,
    //   },
    //   1300: {
    //     slidesPerView: 2.6,
    //     spaceBetween: 10,
    //   },
    // },
  };

  config2: SwiperOptions = {
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: false,
    initialSlide: 0,
    autoplay: true,
    speed: 500,

    grabCursor: true,
    // breakpoints: {
    //   280: {
    //     slidesPerView: 1.2,
    //     spaceBetween: 2,
    //   },
    //   320: {
    //     slidesPerView: 1.2,
    //     spaceBetween: 2,
    //   },
    //   350: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 2,
    //   },
    //   370: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 2,
    //   },
    //   390: {
    //     slidesPerView: 1.7,
    //     spaceBetween: 2,
    //   },
    //   480: {
    //     slidesPerView: 1.8,
    //     spaceBetween: 2,
    //   },
    //   576: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   610: {
    //     slidesPerView: 2.4,
    //     spaceBetween: 10,
    //   },
    //   640: {
    //     slidesPerView: 2.2,
    //     spaceBetween: 10,
    //   },
    //   768: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 2,
    //   },
    //   1024: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 10,
    //   },
    //   1300: {
    //     slidesPerView: 2.6,
    //     spaceBetween: 10,
    //   },
    // },
  };

  services = [
    {
      name: 'Mobile Hybrid App Development',
      src: '../../../../../assets/icons/app-development.png',
      description:
        'Elevate your business with our expert mobile app development service tailored for both iOS and Android platforms. Using the power of Angular and Ionic, we craft versatile applications that seamlessly run on both major mobile operating systems.',
    },
    {
      name: 'Web Portal Development',
      src: '../../../../../assets/icons/portal.png',
      description:
        'Step into a world of limitless possibilities with my expertly crafted web portal solutions. The web portals developed by me are meticulously designed to serve as dynamic gateways, connecting users to a wealth of resources, services, and information in a seamless and intuitive manner.',
    },
    {
      name: 'Web App Development',
      src: '../../../../../assets/icons/web-app.png',
      description:
        'I craft tailor-made web applications that seamlessly integrate advanced functionalities with captivating user experiences. Leveraging the latest technologies and industry best practices, I bring your vision to life with precision and creativity.',
    },
  ];

  projects: any = [
    {
      name: '../../../assets/project-images/sportswriters-logo.svg',
      images: [
        {
          name: 'SportsWriters Mobile Application Both (IOS & Android)',
          src: '../../../../../assets/project-images/SportsWriters-mobile.png',
        },
        {
          name: 'SportsWriters Website',
          src: '../../../../../assets/project-images/Sportswriters-web.png',
        },
        {
          name: 'SportsWriters Admin Portal Dashboard',
          src: '../../../../../assets/project-images/SportsWriters-portal-dashboard.png',
        },
        {
          name: 'SportsWriters Admin Portal Article Edit',
          src: '../../../../../assets/project-images/SportsWriters-portal-Edit-Article.png',
        },
        {
          name: 'SportsWriters Admin Portal Articles Listing',
          src: '../../../../../assets/project-images/SportsWriters-Portal-listing.png',
        },
      ],
    },

    {
      name: '',
      images: [
        {
          name: 'E-commerce Mobile App',
          src: '../../../../../assets/project-images/1.png',
        },
        {
          name: 'E-commerce Store Web 1',
          src: '../../../../../assets/project-images/2.png',
        },
        {
          name: 'E-commerce Store Web 2',
          src: '../../../../../assets/project-images/3.png',
        },
      ],
    },
    {
      name: '',
      images: [
        {
          name: 'BTV-Global',
          src: '../../../../../assets/project-images/BTV-1.jpeg',
        },
        {
          name: 'BTV-Global',
          src: '../../../../../assets/project-images/BTV-2.jpeg',
        },
        {
          name: 'BTV-Global',
          src: '../../../../../assets/project-images/BTV-3.jpeg',
        },
        {
          name: 'BTV-Global',
          src: '../../../../../assets/project-images/BTV-4.jpeg',
        },
      ],
    },
    {
      name: '',
      images: [
        {
          name: 'Joolep (IOS & Android) App',
          src: '../../../../../assets/project-images/Joolep-1.jpeg',
        },
        {
          name: 'Joolep (IOS & Android) App',
          src: '../../../../../assets/project-images/Joolep-2.jpeg',
        },
        {
          name: 'Joolep (IOS & Android) App',
          src: '../../../../../assets/project-images/Joolep-3.jpeg',
        },
        {
          name: 'Joolep (IOS & Android) App',
          src: '../../../../../assets/project-images/Joolep-4.jpeg',
        },

        {
          name: 'Joolep (IOS & Android) App',
          src: '../../../../../assets/project-images/Joolep-6.jpeg',
        },
      ],
    },
  ];

  navItems = [
    { name: 'about me', id: 'about' },
    { name: 'experience', id: 'experience' },
    { name: 'services', id: 'services' },
    { name: 'projects', id: 'projects' },
    { name: 'contact', id: 'contact' },
  ];

  sentences: string[] = [
    'Developer',
    'Creator',

    // Add more sentences as needed
  ];

  currentSentenceIndex = 0;
  currentText = '';
  isAnimating = false;

  menu: boolean = true;

  secretKey: string = 'mzblgavl';
  emailForm = this.fb.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}
  toggleMenu() {
    this.menu = !this.menu;
  }

  //Send an email using formspree.io account
  sendEmail() {
    //Set the url with your secretKey from formspree.io
    let url = 'https://formspree.io/f/' + this.secretKey;

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    console.log('form ', this.emailForm.value);

    let data = `name=${this.name?.value}&email=${this.email?.value}&message=${this.message?.value}`;
    let errorMessage: string = '';

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: (data: any) => {
        console.log('email sent' + JSON.stringify(data));
        this.emailForm.reset();
        this.showSuccess('Email Successfully Sent!');
      },
      error: (error: any) => {
        errorMessage = error.message;
        this.showErr('Error!');
      },
    });
  }

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    this.isAnimating = true;
    const sentence = this.sentences[this.currentSentenceIndex];
    this.typeText(sentence);
  }

  typeText(text: string): void {
    let index = 0;
    const typingInterval = setInterval(() => {
      this.currentText = text.slice(0, index++);
      if (index > text.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.eraseText(text);
        }, 1000); // Wait for 1 second before erasing
      }
    }, 100); // Typing speed: 100ms per character
  }

  eraseText(text: string): void {
    let index = text.length;
    const erasingInterval = setInterval(() => {
      this.currentText = text.slice(0, index--);
      if (index < 0) {
        clearInterval(erasingInterval);
        this.currentSentenceIndex =
          (this.currentSentenceIndex + 1) % this.sentences.length;
        this.animateText();
      }
    }, 50); // Erasing speed: 50ms per character
  }

  scroll(id: string) {
    let element = document.getElementById(id);
    if (element !== null) {
      if (id !== 'about') {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  isSectionVisible(sectionId: string): boolean {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight * 0.6 &&
        rect.bottom >= 0.4 * window.innerHeight
      );
    }
    return false;
  }

  get name() {
    return this.emailForm.get('name');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get message() {
    return this.emailForm.get('message');
  }

  showSuccess(msg: any) {
    this.toastr.success(msg);
  }
  showErr(msg: any) {
    this.toastr.error(msg);
  }
}
