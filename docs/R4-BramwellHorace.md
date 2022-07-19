# Final Project

- **Research & Integrative Activity - Week 4**
- **Horace Bramwell**
- **03/27/2022**

<br>

## Forms in React

This was a great resource for learning about how to work with forms in React. It walks you through the many ways of handling the form state inside of your react application. One of the many ways of handling form data is to use something called controlled components. In short, a controlled component is a component that has its own state. Form fields such as input fields, select fields, and checkboxes typically have their own state and update when the user interacts with them.

**Example:**

```
<input type="text" value={this.state.value} onChange={this.handleChange} />
```

<br>

## Redux Fundamentals, Part 8: Modern Redux with Redux Toolkit

This was a great introduction to setting up modern Redux with Redux Toolkit in React. It is was what I used to help me set up the store, slices, and reducers for my project. Essentially, it walks you through all of the basic steps you need to set up Redux in React in a way that is easy to follow. As someone who had never used Redux before, I was able to quickly learn essentially how it works and how each of the different parts works under the hood.

At its core, Redux Toolkit is made up of stores, slices, and reducers. The store is the single source of truth for the application. The slices are where you define the state of your application. The reducers are where you define the logic for updating the state of your application based on the actions that are dispatched. You can add middleware such as thunks to the store to help you with asynchronous actions like fetching data from an API.

<br>

## Reference Links

**Resource 1: Using Redux Toolkit’s createAsyncThunk**  
[logrocket.com](https://blog.logrocket.com/using-redux-toolkits-createasyncthunk/)

This article walks you through the steps of using Redux Toolkit’s createAsyncThunk to fetch data from an API. This article helped me understand, in greater detail, what is happening under the hood with the createAsyncThunk middleware. I found the section `Understanding the function parameters` the most helpful, I was able to see how I would use the promise lifecycle action types to show either a loading or error message when the data is being fetched.

**Lifecycle Action Types**

- PENDING: `FETCH_DATA_PENDING`
- FULFILLED: `FETCH_DATA_FULFILLED`
- REJECTED: `FETCH_DATA_REJECTED`

**Resource 2: Continuous Delivery with Heroku and GitHub**  
[Youtube.com](https://www.youtube.com/watch?v=_tiecDrW6yY)

This video helped me understand how to setup up a simple continuous delivery pipeline with Heroku using GitHub. I was having some issues deploying my project and needed to find a way to deploy my project on new servers. This video helped me set up an automated deployment pipeline with Heroku and get my project deployed to servers on my account.

**Resource 3: How to Build Responsive Tables in React Bootstap and Gatsby JS**  
[Youtube](https://www.youtube.com/watch?v=uaPHrERICK4)

I was having some issues with my tables in my application. More specifically, I was having issues with the responsiveness. This video provided me with a simple solution to my problem. I was able to get the tables to behave how I wanted them to on mobile devices by adding a little bit of CSS to the table.
