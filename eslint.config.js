export default [
  {
    ignores: ["public/js/md5.js"]
  },
  {
    files: ["public/js/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];
