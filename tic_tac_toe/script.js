'use strict';

const Player = (sign) => {
    this.sign = sign

    const getSign = () => {
    return sign;
    };

    return { getSign };
};


const GameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""]

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
    const resultModal = document.getElementById('result-modal')
    const modalOverlay = document.getElementById('result-overlay')
    const gameResult = document.getElementById('game-result')
    const instruction = document.getElementById('instruction')

    const updateBoard = () => {
        for (let i = 0; i < fields.length; i++) {
            fields[i].textContent = GameBoard.getBoard()[i]
        }
    };

    const showResult = (result) => {
        gameResult.textContent = result
        resultModal.classList.add('active')
        modalOverlay.classList.add('active')
    };

    const resetDisplay = () => {
        gameResult.textContent = ''
        resultModal.classList.remove('active')
        modalOverlay.classList.remove('active')
        updateBoard()
        showInstruction()
    };

    const hideInstruction = () => {
        instruction.classList.add('inactive')
    };

    const showInstruction = () => {
        instruction.classList.remove('inactive')
    };
    return {updateBoard, showResult, resetDisplay, hideInstruction, showInstruction}
})();
 
const GameFlow = (() => {
    const playerX = Player('X')
    const playerO = Player('O')
    let turn = 1

    const checkScore = (currentSign) => {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (const combination of winCombinations) {
            let signs = []
            for (const index of combination) {
                signs.push(GameBoard.getField(index))
            }
            const win = signs.every( (val, i, arr) => val === arr[0] ) 
            if (win && signs[0] != ''){
                DisplayController.showResult(`${currentSign} HAS WON THE GAME!`)
            }
        }

    };

    const makeTurn = (event) => { 
        const fieldIndex = event.srcElement.dataset.field
        const fieldVaule = event.srcElement.textContent

        if (fieldVaule === '') {
            const currentSign = turn % 2 === 0 ? playerO.getSign() : playerX.getSign()
            turn += 1
            GameBoard.setField(fieldIndex, currentSign)
            DisplayController.updateBoard()

            if (turn === 10) {
                DisplayController.showResult('ITS A DRAW')
                return
            }

            if (turn >= 6) {
                checkScore(currentSign)
            }
        }

        DisplayController.hideInstruction()
    }; 

    const restartGame = () => {
        turn = 1
        GameBoard.reset()
        DisplayController.resetDisplay()
    }

    const fields = document.getElementsByClassName('board-cell')
    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('click', makeTurn)
    }

    const restartButtons = document.getElementsByClassName('restart-btn')
    for (const button of restartButtons) {
        button.addEventListener('click', restartGame)
    }

})();