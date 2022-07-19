# Final Project

- **Research & Integrative Activity - Week 3**
- **Horace Bramwell**
- **03/20/2022**

<br>

## How ESLint Makes Me a Better React Developer

This article was a great introduction to ESLint and how it can help you develop better React applications. ESLint is essentially a tool that analyzes your code intending to find issues that can lead to bugs or inconsistencies. By default, ESLint ships with a set of rules and best practices and will display red squiggly lines on your code if it finds any issues. Some of the rules are:

- **No duplicate keys on objects**
- **No unreachable code**
- **No unused variables**

In addition to these rules, you can also configure ESLint to use custom rules.

<br>

## How To Make create-react-app work with a Node Back-end API

This article does a great job at explaining how to set up a Node back-end with a React front-end. This setup was much easier than setups I've created in the past. It introduced me to the concept of a "proxy" and how to use it to make a request to a Node backend. I also was introduced to a new library called "concurrently" which allows you to run multiple processes at the same time.

<br>

## Reference Links

**Resource 1: 13 Reasons Why You Should Use Heroku in Your Next Project**  
[dzone.com](https://dzone.com/articles/13-reasons-why-you-should-use-heroku-in-your-next)

This article gives a few good reasons to use Heroku. I've heard of Heroku before, but I've never used it for my projects. Heroku is a platform-as-a-service (PaaS) that allows you to host your web application on the cloud. It's a great way to save money and time by allowing you to get your web application up and running quickly and for free. Heroku provides support for a variety of technologies, including Node.js, React, and more. It also provides the facility to add a database to your project. These are just a few of the benefits of using Heroku. You can read more about Heroku [here](https://www.heroku.com/).

**Resource 2: Using CSS Modules in React**  
[programmingwithmosh.com](https://programmingwithmosh.com/react/css-modules-react/)

Mosh does a great job at explaining how to use CSS Modules in React. This way of using CSS Modules if different from the way I've been taught previously. However, the way it is explained in the article makes much more sense to me. CSS Modules is a way to organize your CSS into a single file and then import it into your React components. This way the CSS is scoped locally to the component and not to the entire application. This allows us to use any valid CSS class names in our React components without having to worry about naming collisions.

**CSS Module File**

```
styles.module.css
```

**CSS Module Import**

    ```
    import styles from './styles.module.css';
    import { Button } from 'react-bootstrap';

    const App = () => {
        return (
            <div className={styles.container}> // This is the CSS class name for the container using CSS Modules
                <Button variant="primary">Primary</Button>
            </div>
        );
    };
    ```

**Resource 3: React Bootstrap tutorial: Upgrade React apps with a CSS framework**  
[educative.io](https://www.educative.io/blog/react-bootstrap-tutorial)

This article was a great refresher on Bootstrap. It's has been a while since I've used Bootstrap, but I've never used it inside of React. I tend to go for Tailwind CSS instead of Bootstrap. So not only did this article help refresh my knowledge of Bootstrap, but it also helped me get a better understanding of how to use Bootstrap inside of React applications. I also found the React Boostrap [documentation](https://react-bootstrap.github.io/getting-started/introduction) helpful as well.
