module.exports = {
  serverUrl: 'https://twilioeyesapi.applitools.com',
  browser: [{width: 800, height: 600, name: 'chrome'}, {width: 800, height: 600, name: 'ie11'}],
  batchId: process.env.APPLITOOLS_BATCH_ID,
  branchName: process.env.CIRCLE_BRANCH,
  baselineBranchName: 'master',
  // exitcode: 0,
  showLogs: true,
  // saveDebugData: true,
};
