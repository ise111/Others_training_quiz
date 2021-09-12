let others_quiz = [
    {
      question: '数値の絶対値を取得したい場合に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(-2)を入れた場合): 2, 出力結果(引数に(2)を入れた場合): 2',
      answers: ['abs()'],
      correct: 'abs()'
    },{
      question: '引数に入れた数値以上の最小整数を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(1.9)を入れた場合): 2, 出力結果(引数に(-1.9)を入れた場合): -1',
      answers: ['ceil()'],
      correct: 'ceil()'
    },{
      question: '引数に入れた角度(ラジアン)のコサインを取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(3.14.../2)を入れた場合): 0.5',
      answers: ['cos()'],
      correct: 'cos()'
    },{
      question: '引数に入れた数値の2を底とした対数の値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(8)を入れた場合): 3',
      answers: ['log2()'],
      correct: 'log2()'
    },{
      question: '引数に入れた数値の中で最大値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(1, 5, 3)を入れた場合): 5',
      answers: ['max()'],
      correct: 'max()'
    },{
      question: '引数に入れた数値の中で最小値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(1, 5, 3)を入れた場合): 1',
      answers: ['min()'],
      correct: 'min()'
    },{
      question: '第1引数に入れた数値を第２引数に入れた数値乗した値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(2, 3)を入れた場合): 8',
      answers: ['pow()'],
      correct: 'pow()'
    },{
      question: '0以上１未満の範囲の数値をランダムで取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(実行毎に数値は変わります): 0.828...',
      answers: ['random()'],
      correct: 'random()'
    },{
      question: '引数に入れた数値で四捨五入した値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(1.45)を入れた場合): 1, 出力結果(引数に(1.5)を入れた場合): 2',
      answers: ['round()'],
      correct: 'round()'
    },{
      question: '引数に入れた数値が正か負か確認したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(-3)を入れた場合): -1, 出力結果(引数に(4)を入れた場合): 1',
      answers: ['sign()'],
      correct: 'sign()'
    },{
      question: '引数に入れた数値以下の最大の整数を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(-1.9)を入れた場合): -2, 出力結果(引数に(1.9)を入れた場合): 1',
      answers: ['floor()'],
      correct: 'floor()'
    },{
      question: '引数に入れた数値の少数部の桁を取り除いた値を取得したい際に使用するMathオブジェクトの静的メソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に(-1.9)を入れた場合): -1, 出力結果(引数に(1.9)を入れた場合): 1',
      answers: ['trunc()'],
      correct: 'trunc()'
    },{
      question: '地方時に基づき、指定された日付(1~31)を取得したい際に使用するDateオブジェクトのインスタンスメソッドは次のうちどれ？',
      before: 'const date = new Date()を定義',
      result: '出力結果(8月30日に実行した場合): 30',
      answers: ['getDate()'],
      correct: 'getDate()'
    },{
      question: 'tagNameで指定したHTML要素を生成したい際に使用するDocumentのメソッドは次のうちどれ？',
      before: '',
      result: '出力結果(引数に("div")を入れた場合): <div></div>',
      answers: ['createElement()'],
      correct: 'createElement()'
    },{
      question: '指定したセレクタ又はそのグループに一致するElementを取得したい際に使用するDocumentのメソッドは次のうちどれ？',
      before: 'HTML <body>タグ内: <div id="sample">hello</div>',
      result: '出力結果(引数に("#sample")を入れた場合): <div id="sample">hello</div>',
      answers: ['querySelector()'],
      correct: 'querySelector()'
    },{
      question: 'ノードを指定した親ノードの子ノードの末尾に追加したい際に使用するメソッドは次のうちどれ？',
      before: 'HTML<body>タグ内: <ul>タグ内の２つの<li>タグがある場合',
      result: '出力結果(引数に("element")(※elementは定数で新たな<li>タグ生成を定義)を入れ、<ul>に対して実行した場合): 既存の２つの<li>タグの下に新たな<li>タグが追加',
      answers: ['appendChild()'],
      correct: 'appendChild()'
    },{
      question: 'ノードを指定した親ノードの子ノードの先頭に追加したい際に使用するメソッドは次のうちどれ？',
      before: 'HTML<body>タグ内: <ul>タグ内の２つの<li>タグがある場合',
      result: '出力結果(引数に("element")(※elementは定数で新たな<li>タグ生成を定義)を入れ、<ul>に対して実行した場合): 既存の２つの<li>タグの下に新たな<li>タグが追加',
      answers: ['insertBefore()'],
      correct: 'insertBefore()'
    },{
      question: '特定のイベントが発生した際に関数を呼び出したい際に使用するメソッドは次のうちどれ？',
      before: 'HTML<body>タグ内: <div>Hello</div>',
      result: '出力結果(引数に("click", 関数)(※本来は設定しますが、今回は省略)を入れ、<div>に対して実行した場合): 「Hello」をクリックすると設定した関数が実行される',
      answers: ['addEventListener()'],
      correct: 'addEventListener()'
    }
];