import { createInterface } from 'readline';

// インターフェースの作成
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promiseを使った質問関数
function question(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

// メイン処理（async/awaitで非同期処理を書きやすく）
async function main() {
    console.log('簡単な個人インタビューフォーム');
    console.log('---------------------');

    try {    
        // 複数の質問を順番に処理
        const name = await question('ニックネームを入力してください: ');
        const age = await question('年齢を入力してください: ');
        const hobby = await question('趣味を入力してください: ');
        
        // 結果の表示
        console.log('\n----- 入力情報 -----');
        console.log(`ニックネーム: ${name}`);
        console.log(`年齢: ${age}`);
        console.log(`趣味: ${hobby}`);
        
        // 年齢に応じたメッセージ
        const ageNum = parseInt(age);
        if (isNaN(ageNum)) {
            console.log('年齢は数値で入力してください。');
        } else if (ageNum < 20) {
            console.log('若いですね！これからが楽しみです。');
        } else if (ageNum < 60) {
            console.log('充実した日々をお過ごしですか？');
        } else {
            console.log('豊かな経験をお持ちですね！');
        }
    
    } catch (error) {
        console.error('エラーが発生しました:', error);
    } finally {
        // 必ずインターフェースを閉じる
        rl.close();
    }
}

// プログラムの実行
main();
