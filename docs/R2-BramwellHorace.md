# Final Project

- **Research & Integrative Activity - Week 2**
- **Horace Bramwell**
- **03/13/2022**

<br>

## Confirmshaming – the art of insulting your target group

<br>

This article by Per Axbom talks about a dark design pattern known as confirmshaming. *"Confirmshaming is the act of guilting the user into opting into something. The option to decline is worded in such a way as to shame the user into compliance."* This is a design pattern that I have witnessed many times before but never given much thought to about the potential impact on users. This article is a great read and does a great job of explaining just how bad confirmshaming is and why you should avoid it in your designs. 

<br>

**Example:** 

<br>

<img src="https://uploads-ssl.webflow.com/60e451ab1f8182d8e488186d/61fce9e2cf3f0fa5e74ee1ce_confshame-google.png" alt="Gmail confirm shaming example" width=600> 

<br>

**Some reasons why you should avoid confirmshaming:** 

* It's offensive to the user
* It does the opposite of what you want the user to do
* Trust between you and the user is compromised
* Your reputation can be tarnished
* Vunerable people risk feeling bad about themselves

<br>

## Why you should always do documentation before development

<br>

This article discusses why documenting before development is a good idea. The section "Write the documentation for the application you want" was pretty helpful in giving me another perspective on how to document my project. Documenting how a user would use your application makes you think of your application from the perspective of the user. You gain a better understanding of how your application should work and how it will be used. 

<br>

Another reason to document before development is that it gives you a solid foundation for you project. You as a developer code towards a specific blueprint of exactly how your application should work. 

<br>

## Reference Links

<br>

**Resource 1: How To Use PropTypes in React**
[Freecodecamp.org](https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/)

This article by Ateev Duggal is a very informative read. He does a great job of explaining what PropTypes are and how to use them in React. I have not used them in my projects, so I have very little experience with them. I know that they are a requirement for the final project so I wanted to get a better understanding of how they work. In short, PropTypes are a way to validate the data that is passed into your components. PropTypes are very similar to TypeScript's type system.

<br>

**Types of PropTypes**

| Type | Class | Example |
|------|-------|---------|
| string | PropTypes.string | "Hello World" |
| number | PropTypes.number | 42 |
| bool | PropTypes.bool | true |
| array | PropTypes.array | [1, 2, 3] |
| object | PropTypes.object | { name: "John" } |
| func | PropTypes.func | function(e) { console.log(e) } |
| any | PropTypes.any | "Hello World" |
| symbol | PropTypes.symbol | Symbol("Hello World") |

<br>

**Example Definition:**

```
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```


<br>

**Resource 2: Controlling Your Environment Makes You Happy**
[joelonsoftware.com](https://www.joelonsoftware.com/2000/04/10/controlling-your-environment-makes-you-happy/)

Joel Spolsky tells a few entertaining stories to paint a picture of how important it is for your piece of software (or any product or application) to work as the user expects. This article helped me think of my project more from a user perspective than from a developer perspective. UI is important because it affects the feelings and emotions of the user.
If your application isn't working as the user expects, they will become unhappy and blame your application for it.

<br>

**Key Takeaways**

* What may seem like tiny frustrations may have a huge impact on the user.
* Try to interpret the actions your users will take.
* Make the user feel in control.
* Stick to the rules of good UI design.

<br>

> ## *"A user interface is well-designed when the program behaves exactly how the user thought it would."*

<br>

**Resource 3: GitHub Issue Templates - GitHub Project Management Tutorial**
[Youtube.com](https://www.youtube.com/watch?v=UPsCXqxxJUA&t=16s)

This video gave me a better idea of creating and using GitHub issue templates. In short, issue templates help you create issues more quickly and efficiently. They allow you to pre-populate the issue with the information that you know you will need in the future. I now have a better understanding of what I am doing for my project plan.