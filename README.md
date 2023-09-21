# User logs into account

# PlayWright + Cucumber + github actions

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm run test` to run tests with a pre-selected browser and a link to the site
6. `npm run report` to create report for the multiple-cucumber-html-reporter

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. Screenshots of failure

### Folder structure

1. `src\helper\pages` -> All the page (UI screen)
2. `src\test\features` -> Features 
3. `src\test\steps` -> Step definitions
4. `src\test\hooks\hooks.ts` -> Browser setup and teardown logic
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `src\helper\report.ts` -> To generate the report
8. `cucumber.json` -> For setting Cucumber options
9. `package.json` -> Contains all the dependencies
