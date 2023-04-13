<!--
# Intellifusion: A consultation website concept

A modern headless CMS consultation website featuring React Router, Bootstrap, email.js, and Sanity.io.


<p align="center">
  <img src="demo-gif.gif" alt="Collaboration gif">
</p>

## Tech Stack
<p align="center">
  <b>Client</b><br>
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" alt="React" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React+Router&color=CA4245&logo=React+Router&logoColor=FFFFFF&label=" alt="React Router" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=FFFFFF&label=" alt="Bootstrap" />
</p>

<p align="center">
  <b>CMS</b><br>
  <img src="https://img.shields.io/badge/Sanity.io-white?logo=data:image/png;base64data:image/png;base64,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&style=for-the-badge&borderColor=red&borderWidth=1" alt="Sanity.io" />
</p>

<p align="center">
  <b>Email</b><br>
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" alt="Emailjs" />
</p>

## Use as a Template

If you're interested in using this project as a template, the major changes you will need to do (outside of specific copy and images) include:

1. Setting up a Sanity.io account, and linking your account and database to the websit via the sanityConfiguration object.

2. Email Configuration

## Features

- React Routing
- Responsive! Transitions and Animations with every interaction
- Bootstrap components
- Headless CMS featuring Sanity.io
- Easily create schemas and pull from your Data Lake via GROQ, a simpler(better) version of GraphQL
- Once published, your Sanity Studio acts as a control panel for you/your team to seamlessly integrate content based on schemas
- No technical skills required to update content to improve workflow


## Installation

Fork, clone and navigate into the root directory. Install dependencies:

```bash
  npm i
```
Start the development server on port 3000

```bash
  npm run start
```
In a separate terminal window, navigate into your new sanity project foldr and run:

```bash
  npm run dev
```
This will fire up the Sanity Studio in development mode on port 3333

Check out sanity.io for further instructions, examples, and more!


## Roadmap

- Integrate Email/Contact us Form with gmail

- Integrate calendar/appointment functionality

- Improve performance and image loading

## Live Link:

[![Function-Junction-Screenshot](https://user-images.githubusercontent.com/114263701/229918214-0c951921-ba66-4007-98b3-1846dacd3f06.png)](https://youtu.be/BIyzn8brDMw)

## License:

MIT License. -->




<!-- Add banner here -->
<img src="https://source.unsplash.com/random/1280x650?technology" alt="random technology image">

# Intellifusion: A consultation website

A modern headless CMS consultation website featuring React Router, Bootstrap, email.js, and Sanity.io.


<p align="center">
  <img src="demo-gif.gif" alt="Collaboration gif">
</p>

## Tech Stack
<p align="center">
  <b>Client</b><br>
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" alt="React" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React+Router&color=CA4245&logo=React+Router&logoColor=FFFFFF&label=" alt="React Router" />
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=FFFFFF&label=" alt="Bootstrap" />
</p>

<p align="center">
  <b>CMS</b><br>
  <img src="https://img.shields.io/badge/Sanity.io-white?logo=data:image/png;base64data:image/png;base64,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&style=for-the-badge&borderColor=red&borderWidth=1" alt="Sanity.io" />
</p>

<p align="center">
  <b>Email</b><br>
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=" alt="Emailjs" />
</p>

# Features

- React Routing
- Responsive! Transitions and Animations with every interaction
- Bootstrap components
- Headless CMS featuring Sanity.io
- Easily create schemas and pull from your Data Lake via GROQ, a simpler(better) version of GraphQL
- Once published, your Sanity Studio acts as a control panel for you/your team to seamlessly integrate content based on schemas
- No technical skills required to update content to improve workflow


![Random GIF](https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif)

# Table of contents

- [Project Title](#Intellifusion:-A-consultation-website-concept)
- [Demo-Preview](#demo-preview)
- [Features](#features)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

Fork, clone and navigate into the root directory. Install dependencies:

```bash
  npm i
```
Start the development server on port 3000

```bash
  npm run start
```
In a separate terminal window, navigate into your new sanity project foldr and run:

```bash
  npm run dev
```
This will fire up the Sanity Studio in development mode on port 3333

Check out sanity.io for further instructions, examples, and more!

# Usage
[(Back to top)](#table-of-contents)

If you're interested in using this project as a template, the major changes you will need to do (outside of specific copy and images) include:

1. Setting up a Sanity.io account, and linking your account and database to the websit via the sanityConfiguration object.

2. Email Configuration

# Roadmap
[(Back to top)](#table-of-contents)

- Integrate Email/Contact us Form with gmail

- Integrate calendar/appointment functionality

- Improve performance and image loading

# Contribute
[(Back to top)](#table-of-contents)

- If you find this repo useful, please give it a star(emoji)!

- If you're on medium, please give me a follow!

# License
[(Back to top)](#table-of-contents)

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)

# Closing Thoughts
[(Back to top)](#table-of-contents)

Let's also add a footer because I love footers and also you **can** use this to convey important info.

Let's make it an image because by now you have realised that multimedia in images == cool(*please notice the subtle programming joke).

So that is it... You have completed your training young grasshopper. Now it is time for you to use this ideas for your projects.

Don't forget your **README Sensei**(*cool twitter handle idea*) when your project takes off with your **Awesome README**.

Leave a star in GitHub, give a clap in Medium and share this guide if you found this helpful.

**Now folks, the moment you've all been waiting for! The footer!**
***[Audible gasp]***

<!-- Add the footer here -->

![Footer](https://github.com/navendu-pottekkat/awesome-readme/blob/master/fooooooter.png)