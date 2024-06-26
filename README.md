I used the tech and tools which were included the project at the start (NextJS, CSS modules, React w/ TypeScript) and also added cypress for end to end tests.

Some things I would change if I spent more time on it:

- I have used one API call to the query endpoint to fetch the data. This will return the same data each time, it would be more useful to use variables so it can be used for different requests.
- Include error handling - there is nothing to catch errors if the API call fails. Could add a 404 page.
- Improve the styling.

## How to run tests

```bash
npm run cypress:open
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed

We would like you to clone this repository and amend the home page to display a list of Cards with the launches data retrieved from the spacex data API. You may take as long as you require to complete the solution to demonstrate your knowledge in creating a web application, however, we ideally would like this returned within 3 days.

Please consider the structure of your code and develop as if you were working in a commercial team environment and test the solution as you see fit.

The restful api that we would like you to use is https://api.spacexdata.com/v5/

You can find docs for this API here: https://github.com/r-spacex/SpaceX-API/tree/master/docs#rspacex-api-docs

Your solution should cover the following tasks:

- Make API request(s) on page load
- Display data top 10 items
- Provide some test coverage for your project

The data that we would like you to display are:

- `name`
- `date_utc`
- The first core serial/name from `cores`
- `id` and `type` from payloads
- display the image from `links.patch.small` in links
- use `success` and `failures` to show the user the success/failure of launch and reason of failure.
