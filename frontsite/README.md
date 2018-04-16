# Quizz

## 概要
Firebaseを使ったインタラクティブな4択クイズ作成アプリ、Quizzのレポジトリ  
本レポジトリではWeb部分のみを扱い、今後iPhoneとAndroidアプリとして展開する場合はReact.jsで組んだWebを、NativeのWebViewで読み込む形式にする予定。

## 開発環境と使い方
### Mac
- Node.js v8.9.4
- yarn v0.24.5

```bash
yarn install
yarn run start
```

## 利用している技術
- webpack [task runner]
- React.js [view management]
  - material-ui [design]
- Firebase [DB]