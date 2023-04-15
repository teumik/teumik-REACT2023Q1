module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'arrow-body-style': 'error',
    'class-methods-use-this': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    indent: 'off',
    'no-shadow': 'off',
    'comma-dangle': 'off',
    semi: 'off',
    quotes: 'off',
    'padding-line-between-statements': 'off',
    'keyword-spacing': 'off',

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'never',
        functions: 'never',
        enums: 'always-multiline',
      },
    ],
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type', 'function', 'class', 'export'],
      },
    ],
    '@typescript-eslint/keyword-spacing': ['error'],
    '@typescript-eslint/type-annotation-spacing': 'error',

    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/prefer-stateless-function': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],

    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
};
