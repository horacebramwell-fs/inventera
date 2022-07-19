# Final Project

### Horace Bramwell / Student ID: 0004871418

Hello my name is Horace Bramwell. I am a Web Design & Development student from Full Sail University.

![Degree Program](https://img.shields.io/badge/degree-web%20design%20%26%20development-blue.svg)&nbsp;

hbramwell@student.fullsail.edu -- (754) 302-8813

---

## Log

### April 12, 2022

**🛠 Work completed:**

During this week, I started working on the backend of the application. This included creating the database (PostgreSQL), creating the models, and creating the routes. I also worked on some basic error handling. The backend is currently in a very early stage of development and will be updated as time goes on. For example, some routes return null values, which is not ideal. They should be updated to return a 404 status code with a message. In addition to this, the user route which I created for testing purposes should be removed in the future. Other than that, the backend is pretty solid. However, I am a bit concerned about how migrations will work once I began deploying the application since some models depend on other models and require migrations to run in a specific order. Other than that, I think the backend is coming along nicely.

**🛑 Challenges:**

My biggest challenge this week was removing columns from the database. I tried creating a new migration file and running it. However, it failed with the following error: 'relation "products" does not exist. After some research, I found that this error may have been caused by how the table was created. So, I decided to remove the columns from the database from the command line and update the existing migration file.

In addition, some models and routes needed updating from what I originally intended. This was because of changes made to the front end. To reduce the amount of refactoring that could be required, I decided to remove or add some columns and relationships to some models. While this wasn't a huge deal, it did slow down the development process a bit.

**⚡️ Plans:**

To address the above challenges and concerns, I will be working on the following:

- [ ] Test deployment of the application on Heroku. Testing migrations and seeds.
- [x] Refactor the codebase to improve readability, maintainability, and consistency.
- [x] Replace the user route with an authentication route.
- [x] Update controllers/routes to return a 404 status code with a message when data is null.
- [x] Add comments to the codebase. As the codebase grows, it will be easier to understand what is going on.

<br>

### April 19, 2022

<br>

**🛠 Work completed:**

This week, the main tasks I wanted to focus on were authentication and testing. For authentication, I created an authentication controller that will handle all of the authentication logic. This includes creating a user and logging in a user. I also created the routes for the authentication controller. I then proceeded to create an auth middleware that is used to check for a valid token. This middleware was added to the routes I don't want to be accessible to the public or unauthorized users. I created utility functions to handle token generation that is used in the authentication controller.

In addition to adding authentication to the backend, I began running tests on all of the API endpoints using [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest). These test cases were checking for the status code and the response body. As I continue to make improvements to the API, I will be running additional tests to ensure that the API is working as intended.

Lastly, I added image upload functionality to the application and updated the forms on the front end. Currently, the image upload functionality is in its own route and controller. However, I am planning on adding this to the user route in the future once I added an avatar column to the database and updated the user model.

**🛑 Challenges:**

This week, there weren't any major challenges as it pertains to the project. However, there were some personal challenges that affected the quality of work produced this week.

**⚡️ Plans:**

This week I wasn't able to test the deployment of the application on Heroku. So that will be one of the first things I will do during the next milestone. In addition to testing deployment on Heroku, I plan to complete the following:

- [ ] Update Redux to use Backend API.
- [x] Additional Refactoring.
- [x] Add an avatar column to the database and update the user model.
- [x] Update response body to include status code and message for each endpoint. This will be used to display messages on the front end.
- [x] Test new features.

<br>

### April 26, 2022

<br>

**🛠 Work completed:**

This week, my primary task was to update the Redux features created in the previous month to use the Backend API. Initially, I was going to update the thunk functions with the URLs and data required to make the API calls. However, I decided to remove the existing files and start from scratch. I did this partly out of frustration from the challenges I faced, which I will briefly discuss later.

Entering this milestone, I set out to have all the necessary slices containing the actions and reducers necessary for the application to function. Unfortunately, I was only able to get a few of them done. These include Auth, User, Material, Unit, Category, and Supplier slices. To make the necessary API calls, I created a service file that contains the functions that make those calls. I then imported those functions inside the createAsyncThunk functions and returned the data or error messages to the reducers. While this turned out to be the fix to some issues I faced, it took me more time than planned. There is more work I have to get done for the application to be fully functional with the backend API.

**🛑 Challenges:**

This week has turned out to be one of the most challenging weeks working on this final project. I thought I had a pretty good grasp on Redux Toolkit. However, I found myself getting stuck on seemingly simple tasks such as making asynchronous calls to the API. While using the mock API data with Redux, I didn't have many issues making calls to the mock API. However, when I replaced the mock API with the backend API I created for my project, I began running into several issues. For example, after logging in the user and trying to fetch the user data, I would see that the application wasn't being populated with the user data. After checking out Redux Dev Tools, I noticed that the action for fetching the user data was stuck pending. I can't recall exactly why this occurred. However, I remember having to console log quite a bit and create a service file to make the calls to the API.

The next issue I had was after logging out of the application and logging in with a different user, the previous user data was still being displayed. This was because, in the user slice, I was accessing the JWT token from the local storage. Since the token was set using the previous user token, once the new user logged in, the token which was set using the previous user's token was still being used. This was causing the application to display the previous user's data. Since the user in the auth slice was being set to the new user after logging in, I used the useSelector hook to access the user state which contained the new user's JWT token.

Another issue I had was getting a JWT malformed error when passing the token to the backend. After console logging to see what was happening, I was able to see that an object was being passed to the backend instead of the token. This was caused by me trying to pass more than one argument into the createAsyncThunk function. I was able to fix this by creating a data object that contained the token and the data I wanted to send and destructuring it in the thunk and before passing it to the service function which makes the API calls.

There were a few other minor issues I had. However, I was able to find solutions to them by revisiting the Redux Toolkit documentation and looking at the examples.

**⚡️ Plans:**

Since I was unable to finish all of the Redux features, I will continue to work on them. I also still haven't gotten around to testing deployment on Heroku, as I have been focusing on trying to finish up the development of the application. So, my next steps for the next milestone are the following:

- [x] Finish Redux features.
- [x] Add an empty state to the application.
- [ ] Iron out any issues with the application.
- [x] Test deployment on Heroku.

---

<br>

### May 1, 2022

<br>

**🛠 Work completed:**

For this milestone, I worked on completing all of the redux slices and actions that I didn't complete in the previous milestone. In addition to this work, I needed to update some of the components or create new ones to use the new redux state. There were quite a few "hacks" I implemented to get a working version of the application. This includes using multiple useEffect hooks, conditionals, and utility functions. As I continued development, I realized that some things that I initially planned were either no longer necessary or weren't enough, which resulted in these workarounds. For example, instead of having the user enter the category manually, it made more sense to provide an option to either create a new category or select from an existing one. This required me to add some way of checking the response body for a new category and creating it if it doesn't already exist in the database before sending the data back to the client. The code I wrote for testing these features isn't the cleanest or the prettiest. However, the codebase is still in its early stages. There is quite a bit of refactoring and cleanup I will be doing, both in terms of the front end and backend.

**🛑 Challenges:**

During this milestone, I didn't run into any major challenges during development. The biggest issue I faced was during deployment to the staging environment. When I tried to deploy the application to test if it functions as it does locally, I kept getting a Heroku Internal Server Error. I decided to upload the project to my personal Github account to deploy to render.com to see if it might have been an issue with my project or the Heroku server. The issue seemed to be Heroku since my project deployed to render.com without any issues.

As for the functionality of the application, everything worked as it does locally, except for the production route. When I go to add a new production, I get a 504 error. I don't know why, and I don't know how to fix it. When I view the logs in the dashboard, I see that the error is coming from the server. It appears that when the production is being created, userId is not being set. This will require some investigation to see what is causing this issue and how to fix it.

**⚡️ Plans:**

My plans for future development are to refactor the codebase, create utility functions to handle repetitive tasks, update migration scripts to remove columns and add columns to reflect the new functionality, and fix the issue with the production route. I will also be updating the Redux reducers to use the message from the server instead of the hardcoded message.

<!-- <br>

---

## Progress Check / Stand Up

Each week, I will summarize my milestone activity and progress by including a **Stand-Up**. A "stand-up" is when I take the time to briefly report out on the following...

1. **Accomplishments** - What I worked on this past week
2. **Challenges** - Any challenges I may have (and how I am addressing those challenges)
3. **Next Steps** - What I plan to prioritize and do next

<br>

**Week 1**: This week I researched to help complete some of the project requirements for this week. This included producing a project concept, creating a wireframe outlining the important features of the project, style tile, and project proposal. One of the challenges I faced was finding a concept for the project. I was a bit limited on time so I felt like I didn't spend enough time on research or brainstorming. I feel like my project concept isn't fully fleshed out. However, I was able to zero in on a concept that I not only have some experience with but also got some good input from other people. Moving into the next milestone, I will be sure to allocate more time to research and make sure the features I am proposing are clear and easy to understand.

**Week 2**: This week, I worked on the planning portion of my project. This work included creating a click-through prototype of the application, creating issues for things to get done, and planning out the API endpoints required for the application. The challenges I faced this week were understanding the type of relationships necessary for specific API tables. The other challenge was figuring out the proper way to set up junction tables associations with Sequelize. I've begun building out the API with Sequelize since I know it will take the most time. My plan moving forward is to continue this work and make improvements where I see fit.

**Week 3**: This week I learned how to set up ESLint and how to set up a React project with a node server. I also went over a few additional research topics to help me create the components for my application. The challenge for me this week was Heroku. I was unable to get things set up according to assignment requirements or deploy anything. I am a bit confused about what exactly I should be doing. I would need to reach out for more clarification. To move things forward, I will be sure to ask for some feedback and get more clarification on what I should be doing in this particular course.

**Week 4**: During the final milestone, in addition to weekly research, I worked on implementing the Redux toolkit into my project using APIary mock API for the data. I continued to make improvements to the overall UI of the application. Also, I fixed most of the responsive issues with the lists/tables. There weren't any challenges I faced during this milestone. To keep this project moving forward, I will continue refactoring the code, making changes to the UI where I see fit. -->
