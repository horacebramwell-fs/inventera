# Final Project

- **RESEARCH: Research & Integration 3**
- **Horace Bramwell**
- **4/26/2022**

<br>

## [The Best Place for Error Messages on Forms](https://uxmovement.com/forms/the-best-place-for-error-messages-on-forms/)

Error messages are a great way to communicate to users what went wrong with their form submission. However, it is not always easy to find the right place to display error messages. In this article, the author presents a few different approaches to displaying error messages on forms and notes which are most preferred by users.

### 🖥 Desktop

**(Best)** - On desktop devices, placing the error messages to the right of the form fields is the most preferred by users. This is because the western reading system goes from left to right. `"When users move their eyes from the input to the error message, it feels like a natural progression that requires little mental and visual effort. "`

### 📱 Mobile

**(Best)** - On mobile devices, the preferred place for error messages is the bottom of the input field where the error occurs. This is because the real estate on mobile devices is limited and lacks the horizontal space to display error messages to the right of the input field. Displaying error messages to the bottom of the input field is the second most preferred by users.

### 🚫 Worst Locations for Error Messages

**(Left)** - Placing error messages to the left of the field goes against the western reading system. Users move their eyes in the opposite direction of their natural reading flow when the error message appears. Placing the error message on the left makes the error message more important when the input field should be the focus of the user's attention.

**(Top)** - Placing error messages to the top of the field is the least preferred by users. This is because it increases the cognitive load for users. Users have to move their eyes from the input field to the error message and can often get confused with the combination of the error message and field label text being displayed on top of each other.

<br>

---

<br>

## [Empty States – The Most Overlooked Aspect of UX](https://www.toptal.com/designers/ux/empty-state-ux-design)

Empty states are a great way to communicate to users that there is nothing to see. As mentioned by the author, it is an often overlooked aspect of UX design and one that I find myself often overlooking. This article not only brings attention to the importance of empty states but provides a few different ways to display them.

### What is an Empty State?

Empty states are moments of the user experience where there is nothing to see. For example, when a user is looking at a list of items and there are no items to display, they may be looking at an empty state. A helpful empty state should tell the user what is happening, why it is happening, and what they can do about it.

### Types of Empty States

- **First Time User** - When a user first uses a feature, they may be looking at an empty state. This is a great time to introduce the user to the feature and provide them with a clear understanding of what they can do.
- **User Completes a Task** - Occurs when a user completes an action and the result is clear. For example, a user may have successfully completed a task and the result is an empty screen. You can provide the user with a clear message that they have completed their task successfully and to provide them with next steps.
- **Errors** - When a user encounters an error. For example, when something goes wrong with a request or the user encounters network issues. You should provide the user with some feedback about the error they encountered and to provide some options to resolve the error.
- **No Results** - This can occur when a user searches for something and there are no results. This is a great time to display a clear message that they have searched for something and found no results and to provide them with options to try again.

### Benefits of Well-Designed Empty States

Well thought-out and designed empty states can help drive users to take action and decrease the likelihood of users getting frustrated and abandoning a your application.

### ✅ Good Empty State

<!-- ![Empty state design with no search results](https://uploads.toptal.io/blog/image/128036/toptal-blog-image-1548744910796-4fb846dad056fa8c97d5c53dafcea381.png) -->
<img src="https://uploads.toptal.io/blog/image/128036/toptal-blog-image-1548744910796-4fb846dad056fa8c97d5c53dafcea381.png" alt="Empty state design with no search results" width="1000"/>

<small> Image source: [Toptal](https://www.toptal.com/designers/ux/empty-state-ux-design) </small>

_This example provides the user with a clear message that they have searched for something and found no results and to provide them with helpful references._

### 🛑 Bad Empty State

<!-- ![Empty state design with missed opportunity](https://uploads.toptal.io/blog/image/128037/toptal-blog-image-1548744919134-5ed6b00919a9f7bb363112c363f2bc34.jpg) -->

<img src="https://uploads.toptal.io/blog/image/128037/toptal-blog-image-1548744919134-5ed6b00919a9f7bb363112c363f2bc34.jpg" alt="Empty state design with missed opportunity" width="1000"/>

<small> Image source: [Toptal](https://www.toptal.com/designers/ux/empty-state-ux-design) </small>

_This example lacks any additional direction or action steps to help the user understand what they should do next._

<br>

---

<br>

## [Designing for the good](https://uxdesign.cc/designing-for-the-good-25064378fee)

I included this in my research this week as a reminder to myself to always think about the user's experience. Informing users that they completed an action successfully adds to the user experience. Success states are a great way to inform the user they are getting closer to their goal. This is something that I don't often notice in my day to day, so when I start my design work, I tend to focus on the error states, forgetting that I also need to inform users that they have completed an action successfully.

![](https://miro.medium.com/max/1200/1*2SQ_RsYLY-zO3JuB_p_SHA.gif)

<small> Image source: [Saptarshi Prakash](https://dribbble.com/shots/5620838-Buy-Food-on-Instagram-Checkout) </small>

<br>

---

<br>

## [Writing Your First Test - (Cypress)](https://docs.cypress.io/guides/getting-started/writing-your-first-test#What-you-ll-learn)

Cypress is a JavaScript testing framework that uses a browser-based test-runner to visually validate your JavaScript code and makes test-driven development (TDD) a breeze. For my application, I used Jest and Supertest to test my endpoints. However, as my application grows beyond Final Project, I will be using Cypress for testing. I like that Cypress can simulate a user's interaction with the application and test the user's experience. For example, it can fill out a login form and test that the user is redirected to the home page. This all happens programmatically based on the code you define. Every test is recorded and can be replayed later. This makes it possible to go back through the user experience and debug any issues, which can be done using the browser's developer tools.

### Getting Started

Install Cypress:

```bash
npm install -D cypress
```

Start Cypress:

```bash
npx cypress open
```

### Writing Your First Test

Main testing code is located in the `cypress/integration/` directory.

- _describe_ - Describes what is being tested.
- _beforeEach_ - setup code that is run before each test. For example, you can use this to tell Cypress to visit a page before each test.
- _it_ - Is used to describe a single test case.
- _expect_ - Is used to validate the test case.

**Eample:**

```js
describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('allows user to login', () => {
    cy.get('#login-input').type('demo@dmo.com');
    cy.get('#password-input').type('demo');
    cy.get('#login-button').click();
    cy.get('h1').should('contain.text', 'Welcome to the app!');
  });
});
```
