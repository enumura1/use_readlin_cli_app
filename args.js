import { createInterface } from 'readline';

// コマンドライン引数の取得（最初の2つ）
const args = process.argv.slice(2);

// モードの確認
const isInteractive = args.includes('--interactive');

// インタラクティブモードの場合
if (isInteractive) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('メッセージを入力してください: ', (message) => {
    console.log(`あなたのメッセージ: ${message}`);
    rl.close();
  });
} 
// 通常モードの場合
else {
  const name = args[0] || '名無し';
  console.log(`こんにちは、${name}さん！`);
  console.log('(hint: --interactive または -i オプションを付けると対話モードになります）');
}

