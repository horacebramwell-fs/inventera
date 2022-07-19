# Final Project

- **RESEARCH: Research & Integration 2**
- **Horace Bramwell**
- **4/19/2022**

<br>

## [Handling JWT-based authentication in Redux](https://medium.com/@mikeric/simple-and-secure-auth-using-jwt-and-redux-134e0dd3c0b4)

This week, I wanted one of the main focuses of my work to be on authentication. I spent some time researching JWT-based authentication and how to use it in a React application on the backend. I was able to create a simple auth route that will handle token generation and auth middleware that will check for a valid token. The next step for me is to implement this in client-side code using Redux.
This article gave me a general overview of how I might go about doing this. However, I will be implementing it differently from how it's shown in the article.

### A General Flow for Authentication

- The user clicks the login button
- Server checks if the user exists
- If the user exists, the server generates a token
- The server sends a token to the client
- The client sends a token to the server
- Server checks token
- If the token is valid, the server sends user data to the client
- Client updates state with user data

### How I might implement this using Redix Toolkit

```javascript
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = '';
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = '';
    },
  },
});

const { actions, reducer } = loginSlice;

export const { loginRequest, loginSuccess, loginFailure, logout } = actions;

export default reducer;
```

### Login Form Component

```javascript
import React, { useState } from 'react';
import { Form, Button, Input, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../redux/login/actions';
import { login } from '../api/login';


export const function LoginForm() {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginRequest());
        try {
            const response = await login(email, password);
            dispatch(loginSuccess(response));
        } catch (err) {
            dispatch(loginFailure(err.message));
        }
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={email}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={password}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Login'}
            </Button>
            {error && <Alert variant="danger">{error}</Alert>}
        </Form>
    );
}
```

---

<br>

## [Authentication in SPA (ReactJS and VueJS) the right way](https://medium.com/@jcbaey/authentication-in-spa-reactjs-and-vuejs-the-right-way-e4a9ac5cd9a3)

This article was a great read on authentication in single-page applications. The author thoroughly covers two different approaches to authentication (Bearer token authentication and cookie-based authentication), highlighting their pros and cons. For my application, I had already planned on using the bearer token authentication and storing the token inside of local storage. However, I wasn't aware of the risks involved with this approach. While I plan on continuing to use this approach, If I have time, I would like to explore cookie-based authentication. Although it also comes with a set of risks, it appears to be the more secure option of the two.

### Bearer Token Authentication (Storing the token in local storage)

A bearer token is a value that goes in the Authorization header of a request. The bearer token is typically a JWT (JSON Web Token) and is used to authenticate a user. It isn't automatically stored, so it must be stored somewhere. This can be done using local storage, session storage, or cookies. A common approach is to store the token in local storage. However, this approach is not the most secure.

**Use Case:**

- Protecting traffic between the client and server
- Protecting traffic between a mobile application, desktop application, and a specific back end
- Protecting traffic between backends (M2M) controlled by different parties (OpenId Connect is an example), or within back end services of one party

**Possible Attacks:**

- **XSS:** Cross-site scripting (the attacker injects malicious code into the request)

### Cookie-based Authentication

There are two kinds of cookies, session cookies, and persistent cookies. Session cookies are stored on the client-side and are deleted when the browser is closed. Persistent cookies are stored on the client-side and are kept until the user deletes them.

They can be configured in a few ways:

- **HTTPOnly:** This is a security feature that prevents the cookie from being accessed by JavaScript.
- **SameSite:** This is a security feature that can be used to prevent the cookie from being sent with cross-site requests.
- **Secure:** This is a security feature that sends the cookie only over HTTPS.

**Use Case:**

- Protecting traffic between a browser and a specific back end
- Cookies make it more difficult for non-browser-based applications to consume your API.

**Possible Attacks:**

- **CSRF:** Cross-site request forgery (is a type of malicious exploit of a website where unauthorized commands are submitted from a user that the web application trusts.)
- **XSS:** Cross-site scripting (the attacker injects malicious code into the request)

_To reduce the risk of XSS attacks, the cookie should be set to HTTPOnly and Secure._

_To reduce the risk of CSRF attacks, the cookie should be set to SameSite. **\*NOTE:** this is not supported by all browsers. If the browser does not support SameSite, the cookie will be sent with cross-site requests._

---

<br>

## [Testing an Express App With Supertest and Jest](https://sammeechward.com/testing-an-express-app-with-supertest-and-jest/)

Another important task for me this week was to get started testing the backend of my application. We were introduced to Jest in the previous month and I have heard about Supertest in the past and wanted to try it out. During my research, I came across this [blog post](https://sammeechward.com/testing-an-express-app-with-supertest-and-jest/) that I found helpful. The author walks you through a simple setup and then provides a few examples of how to test your endpoints.

### Setup

```javascript
const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
```

### Testing Endpoints

```javascript
describe('GET /api/v1/users', () => {
  it('should return a 200 response', async () => {
    const response = await request.get('/api/v1/users');
    expect(response.status).toBe(200);
  });
});
```

---

<br>

## [Cloudinary Image Upload with Nodejs and React](https://www.youtube.com/watch?v=Rw_QeJLnCK4&t=1580s)

Last week, I wasn't able to get around to testing out image uploads with express-fileupload. So I wanted to get around to it this week. After testing out express-fileupload, I quickly realized that this wouldn't be the best option for me. It required a lot of additional packages and I didn't want to spend too much time on it.

After deciding to ditch express-fileupload, I was going to follow along with the AWS S3 tutorial, but I decided to try out Cloudinary instead. Cloudinary is a cloud image hosting service that allows you to upload images to a server and then serve them to your users. It is completely free and doesn't require credit card information.

I followed the [Cloudinary documentation](https://cloudinary.com/documentation/node_js) and created a new account. I then installed the required dependencies. To aid me in completing the additional tasks necessary to upload and retrieve images, I followed some of the steps shown in [this video](https://www.youtube.com/watch?v=Rw_QeJLnCK4&t=1580s) by James Q. Quick.

He does a great job clarifying some things I didn't understand or found a bit confusing. It is a great reference if I ever need a refresher for implementing Cloudinary with Nodejs.
