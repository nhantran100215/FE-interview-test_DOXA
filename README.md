# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`

runs the command to install depencies of application.And you can run `npm install --force` if above command can't perform.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### The app consists of 2 pages, Subreddit/Search page and Thread Page,Each page has a different URL:


## Subreddit/Search page
-  load additional threads once the user scroll to the bottom of the
current list.
- play video for the first video in viewport, and pause video when out of viewport.
- The page has a mechanism for sorting topics/threads by hot,new,top,rising.
- For each thread on this page, i implement :number vote,title,author,time post,number comment,ratio vote.
## Thread Page
- display detail of post.
- For thread on this page, i implement :number vote,title,author,time post,number comment,ratio vote.
## Navigation between Search <-> Thread Page:
- Each page have a different URL.
- Navigation from search to thread can be reachable by clicking on any thread on
search page.
- Data is loaded properly for each page even after a hard refresh.
### the libraries I useed :
- axios:Promise based HTTP client for the browser and node.js.
- classnames: A simple JavaScript utility for conditionally joining classNames together.
- tailwind:a css libraries.
- line-awesome: icon library.
- react-router-dom: The react-router-dom package contains bindings for using React Router in web applications.


