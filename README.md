Frank Woodward's Portfolio https://portfolio-frankie-3976b8e5c822.herokuapp.com/

This is a react based application detailing personal and professional information regarding my career and upbringing.
<img width="1728" alt="desktop portfolio" src="https://github.com/Frankie-Woodward/Portfolio-Frankie/assets/142553084/77862d6e-0a2f-494c-a3c9-794949477c7c">
<img width="1728" alt="mobile -portfolio-cp" src="https://github.com/Frankie-Woodward/Portfolio-Frankie/assets/142553084/85a312f9-7f4c-49e1-9e3d-a10603ff6cc6">
<img width="1728" alt="mobile-portfolio-iq" src="https://github.com/Frankie-Woodward/Portfolio-Frankie/assets/142553084/d1bd7bf8-c3e9-4e26-b311-6d686beed4d2">

Technologies Used: 
1. react
2. node.js
3. express
4. swiperslide
5. css - along with bootstrap framework
6. javascript
7. openai - OpenAi API
8. MongoDB - Atlas for storing CRUD objects
9. Mongoose
10. Cross-origin resource sharing - for communicating between frontend and backend
11. dotenv - ensuring safe practices for storing personal information and using inside of app

swiperslide is used in addition to react's router, to navigate and paginate between pages.

Below are the learning experiences I recieved while working on this project:

- Use your deployed app’s url for your base url;
    - When you add a backend api endpoint, use the base url with backend api endpoint following the base url
        - e.g. : app.com = base url & api/content is api backend endpoint
        - App.com/api/content
- Need to import models to server.mjs for your controller to be able to perform crud operations; which means you also need to import controllers
- Mount controller routes “app.use” before other routes, or place app.use methods before other routes that could create conflicts 
- Responsiveness - remove animations to prevent clutter at smaller screen sizes
- Use HTTP for api endpoints in development, and HTTPS in production and deployment to avoid ssl issues

