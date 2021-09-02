module.exports = {
  hooks: {
    'before:init': ['yarn full-check'],
    'after:bump': 'yarn build',
    'after:git:release':
      'echo Successfully git pushed to ${repo.repository}, attempting to create release tag',
    'after:release':
      'echo Successfully released ${name} v${version} to ${repo.repository}.',
  },
  git: {
    commitMessage: 'chore: release ${version}',
    tagName: 'v${version}',
  },
  npm: {
    publish: true,
  },
  github: {
    release: true,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      preset: {
        name: 'angular',
        types: [
          { type: 'feat', section: 'Features' },
          { type: 'fix', section: 'Bug Fixes' },
          { type: 'chore', hidden: true },
          { type: 'docs', hidden: true },
          { type: 'style', hidden: true },
          { type: 'refactor', hidden: true },
          { type: 'perf', hidden: true },
          { type: 'test', hidden: true },
        ],
      },
    },
  },
};
