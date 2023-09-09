import chalk from 'chalk'
import { WriteStream } from 'tty'
import { TestReport } from './report'

export const renderTestReport = (out: WriteStream, indentLevel: number) => (outcome: TestReport): void => {
  out.write('  '.repeat(indentLevel))
  let indicator: string
  let pen: chalk.Chalk
  switch (outcome.outcome) {
    case 'pass':
      indicator = '✓'
      pen = chalk.greenBright
      break
    case 'wip':
      indicator = '?'
      pen = chalk.yellowBright
      break
    case 'fail':
      indicator = 'x'
      pen = chalk.redBright
      break
  }
  out.write(pen(indicator))
  out.write(` ${pen(outcome.name)}\n`)
}
