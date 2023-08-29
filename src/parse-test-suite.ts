import { classify } from './classify'
import { SuiteReport } from './suite-report'
import { TestRun } from './test-run'

export const parseTestSuite = (suite: Array<TestRun>): SuiteReport => {
  const result: SuiteReport = {
    passedCount: 0,
    failedCount: 0,
    wipTitles: [],
    outcomes: [],
  }
  suite.forEach((currentRun) => {
    const outcome = classify(currentRun)
    switch (outcome) {
      case 'pass':
        result.passedCount += 1
        break
      case 'wip':
        result.wipTitles.push(currentRun.fullName)
        break
      case 'fail':
        result.failedCount += 1
        break
    }
    result.outcomes.push({
      _tag: 'test-report',
      title: currentRun.fullName,
      outcome,
    })
  })
  return result
}
