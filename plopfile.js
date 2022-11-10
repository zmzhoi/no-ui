module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('package', {
    description: 'Generate a package',
    prompts: [
      {
        type: 'input',
        name: 'packageName',
        message: `Plase type packages's name (ex: circle-button):`,
      },
      {
        type: 'input',
        name: 'description',
        message: `Plase type packages's description:`,
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/**',
        destination: './packages/{{dashCase packageName}}',
        abortOnFail: true,
      },
    ],
  });
};
