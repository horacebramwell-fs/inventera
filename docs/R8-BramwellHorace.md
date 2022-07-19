# Final Project

- **RESEARCH: Research & Integration 4**
- **Horace Bramwell**
- **5/1/2022**

<br>

## ["Good Code Documents Itself" And Other Hilarious Jokes You Shouldn't Tell Yourself.](https://hackaday.com/2019/03/05/good-code-documents-itself-and-other-hilarious-jokes-you-shouldnt-tell-yourself/)

While writing clear, concise, and well-organized code is important, it is equally important to write good comments that explain why a piece of code is written in the way that it is. Writing code comments is my least favorite part of the development process, but I share the opinion of the author that they are necessary, not only for your future self but for others who are reading your code.

This article expands on the importance of code comments and provides a few examples of how to write them well.

### Key Takeaways

- **Self Documenting Code Doesn't Exist:** Writing self-explanatory names for functions, variables, etc., makes your code more readable and easier to understand. They give us and others an idea of what the code does. However, they don't explain the big picture of the code. Nor do they necessarily explain the why or how the code works.

- **Comments aren’t an alternative to writing clean code, but an inherent part of it:** This is a pretty obvious one. Writing comments shouldn't be a replacement for writing clean code. It should be a part of it.

- **We shouldn’t document what the code does, but rather why and in what way it does:** Avoid writing comments that are redundant. If you have a function name get_user_info, and you write a comment that says "This function returns the user's information", then you are writing a comment that is redundant.

### Redundant Code Comment

```
/**
 * Returns the temperature.
 */
```

### Descriptive Code Comment

```
/**
 * Returns the temperature in tenth degrees Celsius
 * in range [0..1000], or -1 in case of an error.
 *
 * The temperature itself is set in the periodically
 * executed read_temperature() function.
 *
 * Make sure to call init_adc() before calling this
 * function here, or you will get undefined data.
 */
```

<br>

---

<br>

## [How to write a good README for your GitHub project?](https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project)

Writing a good README is a great way to inform others about your project. This is something that I often struggle with, so I found this article to be a great resource. It addresses the best practices for writing a README and provides guidelines for how to improve their legibility.

## Writing a good README

Make sure the README file always includes the following information:

- Titles and internal titles. Titles should explain clearly what the project is. _(e.g. Inventera - Inventory Management System)_
- Introduction that includes a description of the project and its goals. It should be short and clear. Between two and three sentences for small projects. _(e.g. Inventera is a simple inventory management system that allows you to keep track of your inventory...)_
- Technologies used in the project. This should include the languages used, frameworks used, libraries used, and the version numbers of those libraries. _(e.g. Python 3.7, Flask, SQLite, PyPi)_
- How to install the project. This should include instructions on how to install the project and any dependencies. _(e.g. pip install -r requirements.txt)_

**Optional:**

- Table of contents. This is a list of the sections in the README. It should be organized in a logical order. _(e.g. [Installation](#installation), [Usage](#usage), [Contributing](#contributing), [Tests](#tests), [Questions](#questions))_
- Illustrations. This can be a screenshot of the project, logo, or any other visual representation of the project.
- Scope of functionalities.
- Examples of use. In the case of reusable code or libraries, examples of use should be included.
- Project status. This should include the current status of the project. _(e.g. In development, stable, deprecated, etc.)_
- Sources. Was a part of the project inspired by other projects? If so, include the link to the source.
- Other information. This can include author contact information, license, etc.

<br>

---

<br>

## [Style Lint Guides](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)

<br>

When it comes to the order in which I write CSS, I tend to group the rules based on whatever comes out of my head as I am writing the CSS, which typically ends up not being in any particular order at all. It never really mattered to me. This is largely due to me working on projects alone and not needing to consider other developers.

This article made me give a little more thought to the order in which I write CSS. The author discusses three different ways of ordering CSS and their advantages and disadvantages. The method that seemed to have the most benefits is alphabetically ordering your CSS. One of the main advantages of this method is that it makes it easier to find the rules that you need to change. Also, there isn't much of a learning curve for new developers. What I find the most useful about this method is that it is easy to lint, being that there are tools to format it automatically. Anything that is not in the right order can be easily fixed.

**_Resource for Alphabetical Ordering CSS_**

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
