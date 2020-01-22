function initialize() {
    let i, j;

    // 配列[1, 2, ..., lastNumber]を生成
    let numbers = [];
    for (i = 1; i <= lastNumber; i++) {
        numbers.push(i);
    }

    // 配列の内容をシャッフル（ランダムに並べ替え）
    // ※ Fisher–Yatesアルゴリズムを用いている
    for (i = numbers.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = numbers[i];
        numbers[i] = numbers[r];
        numbers[r] = tmp;
    }

    // ゲーム盤の初期化
    let gameBoard = document.getElementById('game_board');
    for (i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        for (j = 0; j < width; j++) {
            let td = document.createElement('td');
            td.id = numbers[i * width + j];
            td.textContent = numbers[i * width + j];
            tr.appendChild(td);
        }
        gameBoard.appendChild(tr);
    }
}
