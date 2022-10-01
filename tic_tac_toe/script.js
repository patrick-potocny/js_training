'use strict';

const Player = (sign) => {
    this.sign = sign

    const getSign = () => {
    return sign;
    };

    return { getSign };
};


const GameBoard = (() => {
    const board = ["X", "X", "O", "O", "X", "X", "X", "X", "X"]

    const getField = (index) => {
        return board[index];
    };

    const setField = (index, value) => {
        board[index] = value
    };

    const getBoard = () => {
        return board
    };

    const reset = () => {
        for (const i in board) {
            board[i] = ""
        }
    };

    return {getField, setField, getBoard, reset}
})();


const DisplayController = (() => {
    const fields = document.getElementsByClassName('board-cell')

    const updateBoard = () => {
        for (let i = 0; i < fields.length; i++) {
            fields[i].textContent = GameBoard.getBoard()[i]
        }
    };

    const showResult = (result) => {
        const resultModal = document.getElementById('result-modal')
        const modalOverlay = document.getElementById('result-overlay')
        const gameResult = document.getElementById('game-result')
        
        gameResult.textContent = result
        resultModal.classList.add('active')
        modalOverlay.classList.add('active')
    }

    return {updateBoard, showResult}
})();
 