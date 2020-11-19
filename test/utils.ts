import * as chalk from 'chalk';
import { Change } from 'diff';

export function printChanges(changes: Change[]) {
  changes.forEach((c) => {
    if (c.added) {
      console.log(formatDiffByLine(c.value, '+'));
    } else if (c.removed) {
      console.log(formatDiffByLine(c.value, '-'));
    }
  });
}

function formatDiffByLine(diff: string, marker: '+' | '-'): string {
  const color = marker === '+' ? 'green' : 'red';
  const bgColor = marker === '+' ? 'bgGreen' : 'bgRed';
  const diffParts = diff.split('\n');

  return diffParts
    .slice(0, diffParts.length - 1)
    .map((line) =>
      chalk[color](
        `${marker} ${/^\s*$/.test(line) ? chalk[bgColor](line) : line}`
      )
    )
    .join('\n');
}
