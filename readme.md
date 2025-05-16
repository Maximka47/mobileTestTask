# MobileTestTask

## Summary

This repository contains automated end-to-end tests for a sample Android application using [WebdriverIO](https://webdriver.io/) and [Appium](https://appium.io/). The tests cover various UI interactions such as form input, swiping, and navigation, and are configured to run on different Android devices via [BrowserStack](https://www.browserstack.com/).

## Requirements

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- BrowserStack account (for cloud device testing)
- BrowserStack App ID or APK file for the app under test

## Steps to Install

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/MobileTestTask.git
   cd MobileTestTask
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Steps to Launch

1. **Set BrowserStack credentials:**

   Export your credentials as environment variables:
   ```sh
   export BROWSERSTACK_USERNAME=your_browserstack_username
   export BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key
   ```

2. **Run tests on Google Pixel 3:**
   ```sh
   npm run wdio:pixel
   ```

3. **Run tests on Samsung Galaxy S10:**
   ```sh
   npm run wdio:samsung
   ```

You can also configure and run tests via GitHub Actions using the workflow in [.github/workflows/wdio.yml](.github/workflows/wdio.yml).