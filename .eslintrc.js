module.exports = {
  extends: [
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    'no-duplicate-imports': [
      'error',
      {
        includeExports: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          '@mui/icons-material',
          '@mui/material',
          '@mui/lab',
          'date-fns',
          'react-dom/test-utils',
        ],
        patterns: ['../*', '@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@mui/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],
    'no-return-await': 'error',
  },
  ignorePatterns: ['src/**/public/**/*', 'cypress/**'],
};
