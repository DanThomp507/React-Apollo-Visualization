# React-Apollo Data Visualisation

Develop a React-based web application that uses our mock GraphQL API and visualises relationships between posts and topics (and users, if you like). The visualisations must be constructed using D3 or VX (which we recommend). We use Apollo for GraphQL API communication, but you can use whatever solution you prefer.

## Installation Instructions

* git clone <https://github.com/DanThomp507/React-Apollo-Visualization>
* cd into project directory
* run `yarn to install dependencies`
* run `yarn start` to spin up application

## Technologies Used
- React
- Apollo (GraphQL client) - also using Apollo React-Hooks to ensure app is purely functional
- VX (for data visualisation)
- Styled Components (for some minor CSS updates)
- PropTypes

## Design

- I wanted to make the user interface as easy to use as possible given my time constraints. I wanted the data to be presented clearly so that there was no confusion, and that the user could identify the relationship between the post and its potential topics.

- In terms of coding decisions, I prefer using function components with React Hooks as opposed to Class components and having to deal with state management. I think given the scope of this application, function components make the most sense, as state management gets messy and I didn't want to get too distracted by those potential difficulties. I believe that my implementation was clean and efficient.

## Process

My first thought was to identify the data I had to work with and see what the best way to go about visualising was, as there are many possibilities!

I immediately created my react app and installed my GraphQL / Apollo related dependencies. I have experience working with React and Apollo so I knew how to get my client spun up and was able to see the data I was working with pretty quickly!

I don't have an extensive amount of exposure to VX, to be honest. I found learning how to work with it definitely took up a good chunk of my time, which was not an issue at all! I knew that I wanted to display the relationship between a post and its potential likely topics. I decided that I would visualise this using a bar graph that was filterable by post (if a user selects a new post, the new topic data immediately renders).

Overall, the process was pretty straightforward. I knew what I wanted to do and it was just a matter of working with the nuances of VX!

## Challenges

- Working with VX for the first time when I had time constraints was definitely a fun one! However, the documentation is pretty good and I was able to pick it up relatively quickly (quick enough to implement a solution I found satisfactory).

- Determining the best way to visualise the post / topic data. It's quite complex and nuanced and there are many different approaches one can take. My solution is far from perfect and if given more time I'd definitely have a re-think. Overall, though, pretty pleased with how it came out!