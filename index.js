import { createInterface } from 'readline';


// readlineインターフェースの作成
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// 質問を表示し、回答を受け取る
rl.question('あなたの名前は？ ', (name) => {
  console.log(`こんにちは、${name}さん！`);
  rl.close();
});
