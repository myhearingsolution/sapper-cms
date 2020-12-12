/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'svelte'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svelte$': 'svelte-jester',
  },
}
