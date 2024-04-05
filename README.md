# cypress-error-demo

## Description
This is a sample project to demonstrate how Cypress v13.7.2 is not handling this uncaught exception: `ResizeObserver loop completed with undelivered notifications`. 

## Context
When trying to automate the process of logging into a GSuite account with the new Google layout, inputting the user works fine, but then, when transitioning to the password screen, a `ResizeObserver loop completed with undelivered notifications` is thrown, Cypress cannot catch it with the usual `Cypress.on('uncaught:exception')` command, and the test fails consistently.

## Reproducing the error
- Open a shell at the root folder and run `npm install && npx cypress open`.
- Cypress dashboard opens up, click `E2E Testing` > `Chrome` > `Start E2E Testing in Chrome`
- select `login.cy.js`
    - **IMPORTANT**: You will need to replace the `email` variable with a valid GSuite email. I can provide one via e-mail or private message, if necessary.
- The test browses to Gmail login page, fills in the email, and crashes before being able to input the password
