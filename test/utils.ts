import * as chalk from 'chalk';

export function printChanges(changes: Diff.Change[]) {
  changes.forEach((c) => {
    if (c.added) {
      console.log(chalk.green(`+ ${c.value}`));
    } else if (c.removed) {
      console.log(chalk.red(`- ${c.value}`));
    }
  });
}
