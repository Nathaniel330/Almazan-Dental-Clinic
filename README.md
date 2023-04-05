# 🏗 Almazan Dental Clinic
In this project, I worked with [Bernard Lewis](https://github.com/bernardlewiscardona). 

Someone from his family owns a dental clinic but it still doesn't have its own website. We created this project to make online appointments possible and also to boost the business advertisement.

Collaboration, integration of front-end with back-end, basic CRUD were necessary in accomplishing this task.

**Link to project**: [https://almazan-dental-clinic.cyclic.app/](https://almazan-dental-clinic.cyclic.app)
![image](https://user-images.githubusercontent.com/110211889/218249988-a985e38a-1374-49c9-bdac-20bd28532162.png)



## 🧰 How It Was Made ##
**Tech used: Bootstrap, Node.js, Express, MongoDB, mongoose, nodemon**

After figuring out what to build, we then talked about the work distribution. During the development of this project, I believed that I would be more efficient if I worked on the front-end. At this point, I was near a burn-out. After all the basics of HTML, CSS, and Javascript, my brain was so full.

I created a repository to work on. He created a separate repository to work on. Then when we were both done, we 'merged' our works into this repository.
We could have created a single repo, then both of us would work on it, but we needed more room for tests and experiments that might break the whole build. We did this because were still new to collaboration, git, and all these other stuff and we also do not have the luxury of time.



## 🛠 Optimizations ##
The project was built by two people, new to web development. There will definitely be optimizations necessary for the web app. If we had the knowledge and time to learn and implement these things, we will not leave these things undone.

One of the optimizations I can tell is that when the form is submitted: <br>
    the request is good => server hears the request => creat an object in the database => server responses with a redirect <br>
    The post method was succesful BUT the user does not have an idea if the submission went through. We did not know how to make a notification saying, 'booking submitted' displayed on the web page.

Also, when booking an appointment, the user can select a **date that already passed**. Conditional expressions tripping us :)



## 📚 Lessons Learned ##
**MongoDB** <br>
With our level during the development of this site, I'm really impressed that we were able to make this work with a database.
  

**Heroku Deployment** <br>
Since the site is dynamic, I can not deploy it like how I did on my first project where GitHub pages took care of things... <br>


**.gitignore** <br>
You see 👀 that?

### I learned enough to know that there is still so much to absorb..
