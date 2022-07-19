# Final Project

- **RESEARCH: Research & Integration 1**
- **Horace Bramwell**
- **4/12/2022**

<br>

## [Eager Loading In Sequelize](https://dev.to/joannat/eager-loading-fetching-associated-data-with-sequelize-d46)

---

This week I took the time to research eager loading in Sequelize to query related data in one query. This is a great way to reduce the number of queries needed to get the data you need. The following is a quick example of how to use eager loading in Sequelize. The example includes how to exclude certain columns from the query (another topic I researched).

**Assciations:**

```javascript
User.hasMany(Post, { as: 'posts', foreignKey: 'userId' });
Post.belongsTo(User, { as: 'user', foreignKey: 'userId' });
```

**Query:**

```javascript
const getOne = async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    include: [
      {
        model: Post,
        as: 'posts',
      },
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
  });
  res.status(200).json(user);
};
```

<br>

## [Handling Errors in Express](https://scoutapm.com/blog/express-error-handling)

---

There are several ways to handle errors inside of a nodejs application. One of the many ways Express can handle errors is through the use of middleware functions. They can automatically catch errors in route handlers. Another way is to make custom error handlers. The following is an example of how to do both.

**Default Error Handling in Express.js (Middleware):**

```javascript
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
}
```

**Custom Error Handling in Express.js:**

```javascript
const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const validationErrors = Object.values(err.errors).map((validationError) => validationError.message);
    return res.status(400).json({ error: validationErrors });
  }
  next(err);
};

app.use(errorHandler);
```

You can create more robust error handling by creating custom error classes for your applications by extending Node’s Error class. Here you can define application-specific errors such as validation errors, database errors, etc.

**Custom Error Class:**

```javascript
class CustomError extends Error {
  constructor(id, content) {
    super();
    this.name = this.constructor.name;

    if (this instanceof LongTitleError) {
      this.type = 'LongTitleError';
    } else if (this instanceof LongContentError) {
      this.type = 'LongContentError';
    }

    this.message = `The character count of (id: ${id}) ${this.type} is too long. (${content.length} characters)`;
    this.statusCode = 500;
  }
}

class LongTitleError extends CustomError {}
class LongContentError extends CustomError {}
```

<br>

## [Uploading and Storing Images in Database in Express](https://www.youtube.com/watch?v=SAUvlkTDMM4&list=WL&index=1)

---

I want all actions that occur inside of the application to be handled by the application, including image uploads. I thought this would be much easier than using a third-party service. During my research this week, I found [this video](https://www.youtube.com/watch?v=SAUvlkTDMM4&list=WL&index=1) that walks you through how to upload images to a database using Express-fileupload. I will be giving this a try inside of my current application to manage user avatars. If this doesn't work out, I will give AWS S3 a try.

**Express-fileupload:**

- req.files: An object containing the files the user uploaded.
- req.files.file.name: The name of the file.
- req.files.file.data: A buffer representation of your file.

**Basic Upload:**

```javascript
exports.upload = async (req, res, next) => {
  try {
    if (!req.files) {
      return res.status(400).json({ error: 'No files were uploaded.' });
    }

    const { name, data } = req.files.file;
    const img = await File.create({ name, data });

    res.status(201).json(img);
  } catch (error) {
    next(error);
  }
};
```
