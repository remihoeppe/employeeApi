# Employee Creator API

{add test badges here, all projects you build from here on out will have tests, therefore you should have github workflow badges at the top of your repositories: [Github Workflow Badges](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)}

## Demo & Snippets

-   Include hosted link
-   Include images of app if CLI or Client App

---

## Requirements / Purpose

    We need a web application to create, list, modify and delete employees. 
    The application should consist of a spring RESTful API and a React Typescript frontend. 
    The schema for the employee is left to the criteria of the candidate.

### Stack 

- Java / SprinBoot
  > Dependencies
  - Spring Web,
  - Validation I/O
  - Spring Testing
  - Spring Data JPA
  - MySQL Driver
  - Spring Devtools
---

## Build Steps

-   how to build / run project
-   use proper code snippets if there are any commands to run

---

## Design Goals / Approach

-   Design goals
-   why did you implement this the way you did?

---

## Features

### API Endpoints

- /employee
    - GET => Returns all employees (that have not been archived)

- /employee/{id}
    - GET => Returns employee with a specific ID
    - PUT => Will update employee with specific ID, however if ID is not found, a new employee
      record will be created.
    - DELETE => Will change the `deleted` field on the `Employee` to be true. 
      This will make that employee with "invisible" from the "/employee" endpoint, 
      without deleted the record from the database.
    
    

---

## Known issues

-   Remaining bugs, things that have been left unfixed
-   Features that are buggy / flimsy

---

## Future Goals

-   What are the immediate features you'd add given more time

---

## Changelog

-   Write a paragraph labelled with the date every day you work on the project to discuss what you've done for the say. Be specific about the changes that have happened for that day.

### 13/02/2022 - {Theme of changes if applicable}

-   Extended the expiry time of JWT tokens on the backend
-   Added users to cohort response payload
-   Centralized API base URL on frontend using the proxy `package.json` property

---

## What did you struggle with?

-   What? Why? How?

---

## Licensing Details

-   What type of license are you releasing this under?

---

## Further details, related projects, reimplementations

-   Is this project a reimplementation for something you've done in the past? if so explain it and link it here.
-   If it's an API, is there a client app that works with this project? link it
