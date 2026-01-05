import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';


require('dotenv').config()

export default defineConfig<TestOptions>({


  // globalTimeout: 60000,
  timeout: 40000,
  expect: {
    timeout: 2000,
    toMatchSnapshot: { maxDiffPixels: 50 }
  },
  retries: 1,
  reporter: [
    ['json', { outputFile: 'test-results/jsonReport.json' }],
    ['junit', { outputFile: 'test-results/jsonReport.xml' }],
    // ['allure-playwright'],
    ['html']
  ],
  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: process.env.dev === '1' ? 'http://localhost:4201/'
      : process.env.staging === '1' ? 'http://localhost:4202/'
        : 'http://localhost:4200/',

    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 25000,
    video: {
      mode: 'off',
      size: { width: 1920, height: 1080 }
    }
  },

  projects: [
    {
      name: 'chromium',
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      }
    },
    {
      name: 'mobile',
      testMatch: 'testMobile.spec.ts',
      use: {
        ...devices['Galaxy S24']
      }
    }
  ],

  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200/'
  }
});
