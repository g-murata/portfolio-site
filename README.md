# What
ポートフォリオサイト（自己紹介用サイト）です。<br>
Techpitさんの教材を使用して作成しています。<br>
https://www.techpit.jp/courses/194

<img width="1440" alt="スクリーンショット 2020-08-18 12 45 00" src="https://i.gyazo.com/6e9ff4464134a2dadc355919ac55bd62.png">






## Windows環境にてnpm startコマンド実行時、下記のエラーが出る場合。
'react-scripts' は、内部コマンドまたは外部コマンド、<br>
操作可能なプログラムまたはバッチ ファイルとして認識されていません。<br>

（自分の場合は）下記の順番でコマンドを実行したところ解決しました。<br>
npm install<br>
npm run build<br>
npm start<br>

