import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({

  //timeout for 30 sec or 30000ms
  timeout: 30_000,
  //global timeout 10 min - if all your tests take more than 10 min, your tests will be fail. if it's more than that, increase it
  globalTimeout: 10 * 60 * 1000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI 2 times, on local 1 time */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://magento.softwaretestingboard.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [

    {
      //it'll be name setup files as setup.ts, instead of spec.ts
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      dependencies: ["setup"], //whatever sets in setup wil run before running test cases in those browsers
      use: { ...devices['Desktop Chrome'], permissions:["clipboard-read"] },
    },

    {
      name: 'firefox',
      dependencies: ["setup"],
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //dependencies: ["setup"],
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
