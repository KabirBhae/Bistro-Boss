<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/KabirBhae/Bistro-Boss/tree/main">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Future-Developments">Future Developments</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A MERN stack project to streamline restaurant operations and enhance dining experience.

Project Summary:
* CRUD feature of menu items implemented using React, Express and MongoDB.
* Private routing and role-based routing implemented using JWT along with Axios interceptors.
* Payment functionality completed using Stripe.
* Utilization of libraries like TanStack Query, React Hook Form, DaisyUI, Swiper.js etc. to write performance-efficient, scalable code while enhancing the overall user experience.
* Use of custom hooks and context API to write modular code.

Checkout the deployed project at: [Bistro Boss Website](https://bistro-boss-bf579.web.app)  
Source code of server side is available in this repository: [Bistro-Boss-Server](https://github.com/KabirBhae/Bistro-Boss-Server)
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![MongoDB][MongoDB]][Mongodb-url]
* [![Express.js][Express]][Express-url]
* [![React][React.js]][React-url]
* [![NodeJS][Node]][Node-url]
* [![Firebase][Firebase]][Firebase-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![DaisyUI][DaisyUI]][DaisyUI-url]
* [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This section will guide you through setting up the project on your local machine. Follow the steps below to install and run the project.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* Node.js (Download from [Nodejs.org][Node-url])
* npm
  ```sh
  npm install npm@latest -g
  ```
* firebase
  ```sh
  npm install -g firebase-tools
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/KabirBhae/Bistro-Boss.git
   ```
2. Navigate to the folder
    ```sh
   cd Bistro-Boss
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Setup Firebase project
   * Go to [Firebase Console][firebase-console-url]
   * Create a New Project
   * Then click on the Web (</>) icon to set up a Web App.
   * After registering the app, copy the config and save it in your .env.local file like this:
   ```sh
    VITE_FIREBASE_API_KEY=your-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-project-id
    VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_FIREBASE_APP_ID=your-app-id
   ```
5. Start the Development Server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
This project could be used for any real life restaurant that performs food delivery. Users can checkout the restaurant's menu, select items for ordering and also pay by card (visa, master etc.). However, how well this website performs under load is yet to be tested.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Future Developments -->
## Future-Developments

- Add <s>admin</s> (done) and user dashboard
- Making the UI responsive for small and medium devices
- Making the UI more consistent
- Making the UX better

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Arafat Kabir Khan - [My Portfolio Website](https://arafats-portfolio.webflow.io/) - arafatkabirkhan22@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

The completion of the project would be challenging without:

* [Vercel](https://vercel.com/docs)
* [ImgBB](https://imgbb.com/)
* [TanStack Query](https://tanstack.com/query/latest)
* [Sweetalert2](https://sweetalert2.github.ioa)
* [React Parallax](https://github.com/rrutsche/react-parallax)
* [React Responsive Carousel](https://react-responsive-carousel.js.org/)
* [React Simple Captcha](https://github.com/masroorejaz/react-simple-captcha)
* [React Tabs](https://github.com/reactjs/react-tabs)
* [Swiper](https://swiperjs.com/)
* [Recharts](https://github.com/recharts/recharts)
* [React Hook Form](https://react-hook-form.com)
* [React Icons](https://react-icons.github.io/react-icons)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[DaisyUI]: https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=fff
[DaisyUI-url]: https://daisyui.com
[Express]: https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/
[firebase-console-url]: https://console.firebase.google.com/
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[Vite-url]: https://vite.dev/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Node]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Vite]: https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff