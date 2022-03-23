# What
ポートフォリオサイト（自己紹介）です。<br>
Techpitさんの教材を使用しています。<br>
https://www.techpit.jp/courses/194

## Windows環境にてnpm start で下記のエラーが出る場合
'react-scripts' は、内部コマンドまたは外部コマンド、<br>
操作可能なプログラムまたはバッチ ファイルとして認識されていません。<br>

（自分の場合は）下記の順番でコマンドを実行したところ解決しました。<br>
npm install<br>
npm run build<br>
npm start<br>

