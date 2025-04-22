# Node.js CLI サンプルアプリ

Node.js の 対話型コマンドラインアプリケーションのサンプルです。

## 概要

このプロジェクトは、Node.js の標準モジュール `readline` を ES モジュール形式で使用したインタラクティブな CLI アプリケーションの作成を試した備忘録になります。

## 機能

- インタラクティブなユーザー入力の取得
- Promise/async/await を使った非同期処理
- コマンドライン引数の処理
- 見やすいカラフルな出力 (オプション)

## 環境

- v22.14.0

## インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/node-cli-app.git
cd node-cli-app

# 依存パッケージをインストール
npm install
```

## 使い方

各ファイルの動かし方は以下になります。

```bash
# 基本的なreadlineの使用例
node index.js

# 複数の質問を処理する例
node advanced.js

# コマンドライン引数を処理する例
node args.js [名前]
node args.js --interactive

# カラフルな出力の例
node colored.js
```

## プロジェクト構成

```
.
├── README.md
├── package.json
├── index.js       # 基本的なreadlineの使用例
├── advanced.js    # Promise/async/awaitを使った例
├── args.js        # コマンドライン引数を処理する例
└── colored.js     # chalk パッケージを使った例
```

---

詳細な解説は、[Qiita の記事（作成予定）]()を参照してください。
