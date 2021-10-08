# SneaX
<img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/react-app/src/components/Navigation/logo.png' alt='logo' width='200' />
</br> SneaX is a financial application that allows user to invest in SneaX, which are sneakers. The user can purchase SneaXs and add them to their watchlist. This full stack application is inspired by Robinhood.

* live link:  <a href='https://sneaxs.herokuapp.com/'>SneaX</a>

## Technologies
Here are the main technologies used to built this application.
* Backend: Python, Flask, WTForms, SQLAlchemy, PostgreSQL
* Frontend: Javascript, React/Redux, CSS3


## Site Walkthrough
</br> This is the splash page.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/homepageMD.png' height= '350' width='500' alt='pic'>

 </br> New user can sign up by filling out the sign up form. If user do not want to sign up, they can go to login and sign in as demo.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/signupMD.png' height= '350' width='400' alt='pic'>

</br> Returning user can log in by filling out the log in form.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/loginMD.png' height= '350' width='400' alt='pic'>

</br> Once logged in or signed up, user is redirected to the dashboard. In this page, user can view their investments. The graph represents the performance of the account. On the right side, user can view their shares they have purchased and their watchlist.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/dashboardMD.png' height= '350' width='400' alt='pic'>
</br> Close up of the watchlist.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/watchlistMD.png' height= '350' width='400' alt='pic'>

</br> User can purchase shares of SneaXs. The user can search up the SneaX on the search bar.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/searchbarMD.png' height= '100' width='450' alt='pic'>
</br> Once the users select the Sneax, it will take the user to the detail page of that SneaX. In the detail page, the left side shows the detail of the SneaX. User can purchase the SneaX by filling out the form on the right side. User can add it to the watchlist by clicking on add to watchlist. If SneaXs is already purchased, user can go back to the dashboard and update their purchased SneaX there.
</br><img src='https://raw.githubusercontent.com/Simonvargas/SneaX/main/image/sneaxdetailMD.png' height= '350' width='400' alt='pic'>







## Flask React Project

This is the starter for the Flask React project.

### Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:logins
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
