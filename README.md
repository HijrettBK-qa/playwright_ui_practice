# playwright_ui_practice

How to create a playwright project?
1. Create a repo on gitHub
2. Create an empty folder on your local
3. Clone this project
4. Install Playwright
5. Add the file paths in gitignore file to ignore them while commiting updates

6. To pull the latest changes - git pull origin blame-hijrett-qa

npx playwright test --project chromium -> to run in chromium
npx playwright test tests/example.spec.ts:10  => only expect to run the test in 10th line
npx playwright test --grep @smoke => it'll run the tests which have @smoke tag
npx playwright test --grep-invert @smoke => it'll run all the tests except for @smoke tag

