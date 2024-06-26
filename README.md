# PIO

## Description

PIO is a project designed for learning, full-stack development, database management, CRUD requests, and frontend development. Developing this social network is not as complex as it would be at a larger scale, where more extensive data management and microservices would be required. However, it would still involve significant work, such as user registration, login, user authentication, and protected routes.

## Index
-[Running project](#running-project)

-[Tech Stack](#Teck-Stack)
## Running project
The first step is to make a build using the following command

```bash
    docker-compose build
```

The second step is to run the containers using the following command

```bash
    docker-compose up --watch
```
## DataBase Index

#### User table

| #     | Parameter    | Type           |values           | Description                |Max length| key   |
|:----- | :----------- | :------------- |:----------------| :------------------------- |:---------|:----- |
| **1** | `id`         | `UUID`         |**[0-9, A-Z]**   | **Register identicator**   | **32**   |**PK** |
| **2** | `name`       | `varchar(255)` |**[0-9, A-Z]**   | **User name**              |          |       |
| **3** | `biografia`  | `varchar(255)` |**[0-9, A-Z]**   | **User biografia**         |          |       |
| **4** | `emil`       | `varchar(255)` |**[0-9, A-Z, @]**| **User email**             |          |       |
| **5** | `followers`  | `int4`         |**[0-9]**        | **User followers**         |          |       |
| **6** | `following`  | `int4`         |**[0-9]**        | **User following**         |          |       |
| **7** | `password`   | `varchar(255)` |**[0-9, A-Z]**   | **User password**          | **6**    |       |
| **8** | `createdAt`  | `timestamptz`  |**[0-9]**        | **Created user**           |          |       |
| **9** | `updateAt`   | `timestamptz`  |**[0-9]**        | **Update user**            |          |       |

#### Publication table|
| #     | Parameter    | Type           |values        | Description                 |Max length| key   |
|:----- | :----------- | :------------- |:-------------| :-------------------------- |:---------|:----- |
| **1** | `id`         | `UUID`         |**[0-9, A-Z]**| **ID of publication**       | **32**   |**PK** |
| **2** | `content`    | `varchar(255)` |**[0-9, A-Z]**| **Content of publication**  |          |       |
| **3** | `likes`      | `int4`         |**[0-9]**     | **Likes of publication**    |          |       |
| **5** | `createdAt`  | `timestamptz`  |**[0-9]**     | **Created user**            |          |       |
| **6** | `updateAt`   | `timestamptz`  |**[0-9]**     | **Update user**             |          |       |
| **7** | `userId`     | `UUID`         |**[0-9, A-Z]** | **relationship with users**|          |**FK** |

#### Database diagram

![Untitled](https://github.com/YilbertLuna/PIO/assets/97628981/b025f78a-9bf0-43ce-a064-2e2d4b7df1a8)

## Tech Stack

**Client:**
- ![React](https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react)
- ![Next.js](https://img.shields.io/badge/-Next.js-%23282C34?style=flat-square&logo=Next.js)
- ![TaildwindCss](https://img.shields.io/badge/-TaildwindCss-%23282C34?style=flat-square&logo=tailwindcss)


**Server:**
- ![Nodejs](https://img.shields.io/badge/-Node.js-%23282C34?style=flat-square&logo=Node.js)
- ![Express](https://img.shields.io/badge/-Express-%23282C34?style=flat-square&logo=Express)
- ![PostgreSql](https://img.shields.io/badge/-PostgreSql-%23282C34?style=flat-square&logo=postgresql)
- ![Docker](https://img.shields.io/badge/-Dcoker-%23282C34?style=flat-square&logo=docker)
## Author

- [@YilbertLuna](https://www.github.com/YilbertLuna)
