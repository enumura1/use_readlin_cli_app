import { createInterface } from 'readline';
import chalk from 'chalk';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// タイトルの表示
console.log(chalk.blue.bold('=== カラフルCLIアプリ ==='));

rl.question(chalk.green('あなたの名前は？ '), (name) => {
  console.log(chalk.yellow(`こんにちは、${chalk.red.bold(name)}さん！`));
  rl.close();
});
