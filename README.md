# What
ポートフォリオサイト（自己紹介）です。
Techpitさんの教材を使用しています。
https://www.techpit.jp/courses/194

## Windows環境にてnpm start で下記のエラーが出る場合
'react-scripts' は、内部コマンドまたは外部コマンド、
操作可能なプログラムまたはバッチ ファイルとして認識されていません。

（自分の場合は）下記の順番でコマンドを実行したところ解決しました。
npm install
npm run build
npm start

