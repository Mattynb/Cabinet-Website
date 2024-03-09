# Plan Ahead Constructions Website

<img src='https://media.discordapp.net/attachments/1215179484110790706/1216082176085590177/pac-hero-section.png?ex=65ff17c8&is=65eca2c8&hm=3548a8f2c3c56bb31a0ffd1ce1f6cd9cd71ce5737fe18a76c9e0ea5fb533272f&=&format=webp&quality=lossless' alt='MERN banner' width='700' />


<br />
<br />

# What is this project?
We focus on creating a cabinet e-commerce website for https://www.planaheadconstructions.com as the final project for the CS-410 class. The main objectives include practicing teamwork and learning to apply Scrum methodology effectively. This involves collaborative efforts to create the mentioned website, with an emphasis on applying theoretical knowledge and practical skills in project management, web development, and team dynamics in a simulated professional environment.

We are using MERN stack for this project
- **M** = [MongoDB](https://www.mongodb.com)
- **E** = [Express.js](https://expressjs.com)
- **R** = [React.js](https://reactjs.org)
- **N** = [Node.js](https://nodejs.org)

<br />
<br />

### STEP 1:

Click Clone and copy the reposiroty link.<br />
Then open your terminal and clone the repository:

> cd ~/Desktop <br />
> git clone https://github.com/Mattynb/Cabinet-Website

<br />

### STEP 2:

Go to the root of your repository's folder, and install all dependecies:

> cd ~/Desktop/Cabinet-Website<br />
> npm install

<br />

### STEP 3:

Prepare your MongoDB database ([atlas](https://www.mongodb.com/cloud/atlas)).<br />
Or contact Minh to get his existing database connection

Then configure your database within `server/constants/index.js`, by configuring the `MONGO_URI` variable in the .env file.

<br />

### STEP 4: CODE !!!

<br />
<br />

### To run the client and/or the server, you can do any of the following:

From the `root` of your project run:
> npm start

#### OR

Open terminal #1 (backend)
> cd ./server<br />
> npm start

Open terminal #2 (frontend)
> cd ./client<br />
> npm start
