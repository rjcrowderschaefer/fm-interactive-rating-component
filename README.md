# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

!Mobile Views:
- [How Did We Do View](https://i.imgur.com/zgVykxy.png)
- [Thank You View](https://i.imgur.com/oj4xbIZ.png)

!Desktop Views:
- [How Did We Do View](https://i.imgur.com/uUea68f.png)
- [Thank You View](https://i.imgur.com/uUea68f.png)

### Links

- [GitHub Repo](https://github.com/rjcrowderschaefer/fm-interactive-rating-component)
- [Live Site URL](https://rjcrowderschaefer.github.io/fm-interactive-rating-component/)

## My process

I begin the development of this project with the mobile breakpoint of 375px in mind in order to lead with a mobile-first dev workflow. I'm starting to find a rythym with how I approach this projects, first reviewing and marking up the HTML with semantic elements based on the major styling requirements that I see upon first review. I always end up adjusting the markup as I go through each design screen, top to bottom, but the initial review and markup gives me a great starting point. My order of operations for this project was HTML semantic markup, CSS styling and then javascript functionality for each screen. This allowed me to work top down and make sure I align with the full project requirements.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Javascript
- Document Object Model (DOM) manipulation
- Flexbox
- Mobile-first workflow

### What I learned

This was my first Frontend Mentor project to include Javascript and DOM manipulation. Although the project functionality features were fairly straightforward, it took me a bit of time to re-familiarize myself with how to best leverage javascript to adjust HTML and CSS styling via the DOM. It was most rewarding to figure out how to dynamically display the rating number on the Thank You screen based on the selection made on the How Did We Do screen. This included lots of trial and error on how to best loop through the button values. By completing this project, I'm more familiar with how to leverage javascript to implement specific functionality as well as how to target specific ids and classes (and how functionality may impact how the HTML is organized).

```html
<div class="rating-nums">
          <button class="rating-num">1</button>
          <button class="rating-num">2</button>
          <button class="rating-num">3</button>
          <button class="rating-num">4</button>
          <button class="rating-num">5</button>
        </div>
```
Straight forward HTML but I intentionally left off button values and ids while figuring out how to loop through, select and return the button text to use on the Thank You screen.

```css
#primary-container { 
  width: 327px;
  height: 360px;
  background-image: linear-gradient(#222933, #181E27);
  border-radius: 15px;
  margin-bottom: 10px;
}
```
I recognized early on that the How Did We Do and Thank You screens both leveraged the same container styling. I used the above CSS code to ensure consistency across both screens and to avoid having to dupbliate code across mutliple CSS selectors.

```js
const ratingButtons = document.querySelectorAll('.rating-num');
const selectedRatingElement = document.getElementById('rating-num-selection');

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ratingValue = button.textContent;
        selectedRatingElement.textContent = ratingValue
    })
})
```
This forEach method and subsequent function took me a while to figure out, especially how to best use the 'addEventListener' functionality. I was able to incorporate the above code snippet to achieve the rating selection and display logic as required. 


### Continued development

I will continue to practice how to best implement javascript within these types of projects in addition to learning how to incorporate more streamlined and sophisticated styling via CSS.


## Author

- LinkedIn - [RJ Crowder-Schaefer](https://www.linkedin.com/in/rjcrowderschaefer/)
- Frontend Mentor - [@rjcrowderschaefer](https://www.frontendmentor.io/profile/rjcrowderschaefer)
- GitHub - [@rjcrowderschaefer](https://github.com/rjcrowderschaefer)