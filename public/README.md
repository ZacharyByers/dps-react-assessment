# DevPoint Studios - React Assessment

We welcome you and thank you for taking the time to do this coding assessment. Please read the guidelines before getting started.

## Assessment Guidelines:

* The purpose of this assessment is to help us evaluate your client side application development coding skills.
* We use [Semantic UI React](https://react.semantic-ui.com/introduction) in our projects. The skeleton project that you will be working from has this library already included. We don't care what frontend library you use.
* You are allowed to use any non-human resource. Ex:
  * **Allowed:** StackOverflow, Google, Old Code, Etc...
  * **Not Allowed:** Speaking with anyone that has coding knowledge or is in the Technology field.
 * You must use the skeleton project and existing UI as the start for your code
* Check out the API index at [http://localhost:3001/rails/info](http://localhost:3001/rails/info).
* Don't be overwhelmed, supposed to be more steps than you are likely to complete in your given time frame. Try to do them in order, but you can skip steps if you get stuck. If you skip a feature, put in the notes as to why you skipped it.
* Put the time that you start and end on the first line of notes.md. Also, add any grading advice, disclaimers, brags, feedback, or anomalies you encounter along your way.
* Please try to commit often and add messages to your commits so we can more easily review your work.
* We added more steps than we expect you to finish. Don't be overwhelmed and get as far as you can in the time you have. We will take into account the time amount of time you took, the amount of experience you have in ReactJS, etc.
* **The Webpack server and API server for the project can be run via `bundle exec foreman start`**.
* IMPORTANT: You will need to create a .env file in the root directory of the project. The easiest way to do this is to run this command in your terminal: `cp .env.example .env`
* IMPORTANT: You will need to obtain an API key for the BreweryDB API from us at DevPoint Labs. Please reach out to us and let us know when you are ready to start the project.
* HINT: Postman is an awesome tool to start making API Requests with to see what data comes back and how you'll want to manage that data in your React Components.

## Api Endpoints

### Beers

 1. `/api/all_beers` - Returns the first 50 Beers from the BreweryDB API
 2. `/api/beer/:name` - Returns info about the Beer if found by name
 3. `/api/beer/random` - Returns info about a random Beer

### Breweries

 1. `/api/all_breweries` - Returns the first 50 Breweries from the BreweryDB API
 2. `/api/brewery/:name` - Returns info about the Brewery if found by name

### Search

 1. `/api/search_all?query=''` - Returns all info from the BreweryDB API matching search query
 2. `/api/search_beers?query=''` - Returns all info about Beers from the BreweryDB API matching search query
 3. `/api/search_breweries?query=''` - Returns all info about Breweries from the BreweryDB API matching search query

### Glassware

 1. `/api/all_glassware` - Returns all Glassware in the BreweryDB API

### Locations

 1. `/api/all_locations` - Returns the first 50 Locations from the BreweryDB API
 2. `/api/locations/:city` - Returns the first 50 Locations in the matched city from the BreweryDB API

## Assessment Steps:

### PART I - Basic Data Retrieval

 1. Fork this repo so you have a clone of the project in your own github
 2. Create a new Beers Component - `client/src/components`
 2. Add a new client side route - `/beers` that renders our new Beers Component. Our routes are defined in `client/src/components/App.js`.
 3. Use `axios`, `fetch` or any other HTTP Request library to GET the first 50 Beers from `/api/all_beers`. The way you choose to display / style this is up to you.
 4. Use `axios`, `fetch` or any other HTTP Request library to GET the first 50 Breweries from `/api/all_breweries`. The way you choose to display / style this is up to you. You can create a new route and have it on a different page or you could use your Beers Component and a Grid system to show all beers and breweries side by side.
 5. Make sure to use enough attributes to make the site interesting. Most Beers and Breweries have an image or multiple images.

### PART II - Controlled Data Fetching (This is an important step, please don't skip it)

 1. Paginate the list of Beers and Breweries, loading no more than 10 at a time. Do server-side pagination (NOT client-side): [Will Paginate Gem](https://github.com/mislav/will_paginate). This is already setup on the server all you have to do is make sure your client side API requests are passing the correct query strings for the rails server to do the pagination
    * HINT: you can pass pagination details in the query string. If you pass the `page` and `per_page` query string parameters the server will paginate results for you. EXAMPLE: `api/all_beers?page=20&per_page=5`
 2. Have the ability to go to other pages via pagination links or Infinite Scroll
   * Example Libraries
     1. [React Infinite Scroller](https://github.com/CassetteRocks/react-infinite-scroller)
     2. [React Paginate](https://github.com/AdeleD/react-paginate)

### PART III - Looking Up Specific Beers / Breweries

 1. Have the ability to click on a Beer / Brewery and show all the information about it. You will use an API Endpoint for this. The way you choose to display / style this is up to you.

### BONUS

 1. Use any / all of the other API Endpoints to demonstrate your knowledge of React / Redux
 2. Style the project using: Styles in your components, a Stylesheet, or using the Styled Components Library [Styled Components](https://github.com/styled-components/styled-components)
 3. Implement live search on all of your components that show lists of items like Beers, Breweries, Etc
 4. Make your entire site responsive so it looks good on: a large screen, a tablet, and a phone
 5. React Native App
