## SwoleMate
Welcome to my workout tracker app! This application, built with Next.js, allows users to track their workouts effectively. It incorporates NextAuth for user authentication and MongoDB for database management, enabling users to create, edit, and delete workouts. Users can also view all their previously added workouts upon signing in. Additionally, the app provides options for users to select specific body regions and difficulty level. After making these selections, the application generates a randomized set of exercises for the user to engage with, offering a diverse array of workout options.

https://github.com/christweaver/Workout-tracker-app/assets/100533989/d2ab4b9a-ad28-4dd0-8ee9-ebbb98b9875f

## Technologies Used
- Next.js
- NextAuth
- MongoDB
- Tailwind CSS

## Features
- User Authentication: Utilizes NextAuth for secure user login and account creation.
- Database Management: Utilizes MongoDB to store workout data, allowing users to create, edit, and delete workouts.
- Workout Logging: Users can log their workouts, specifying body regions and difficulty levels.
- Randomized Exercise Selection: Based on the selected body regions and difficulty level, a random set of exercises is generated for users to add to their workout database.


## Usage
1. User Authentication: Sign up or log in to your account using NextAuth.
2. Workout Creation: Create a new workout and add to dashboard.
3. Editing and Deleting Workouts: Edit or delete existing workouts as needed.
4. Viewing Workouts: Access all previously added workouts from your account dashboard.
5. Select a randomized set of exercises by specifying the body region and difficulty level.

## Installation
To run this application locally, follow these steps:

Clone this repository to your local machine.

```bash

git clone https://github.com/your-username/workout-tracker-app.git
```
Navigate to the project directory.

```bash

cd workout-tracker-app
```
Install dependencies using npm or yarn.

```bash

npm install
# or
yarn install
```


Create a .env.local file in the root directory of the project and add the MongoDB connection URI and NextAuth configuration.

Start the development server.

```bash

npm run dev
# or
yarn dev
```
Open your browser and visit http://localhost:3000 to view the application.

##
Thank you for using my workout tracker app! Start tracking your workouts efficiently and reach your fitness goals with ease. If you encounter any issues or have any feedback, feel free to open an issue or reach out to our contributors. Happy training! 💪🏋️‍♀️
