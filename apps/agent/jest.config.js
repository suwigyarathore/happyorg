module.exports = {
  name: 'agent',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/agent',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
