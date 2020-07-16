import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.playerNumberInput = Selector('#playerNumberInput');
        this.playerNumberButton = Selector('#playerNumberButton');
        this.questionCategoryListItem = Selector('#questionCategory1');
        this.startGameButton = Selector('#startGameButton');
        this.jeopardyWindow = Selector('#jeopardyWindow');
        this.playerListItem1 = Selector('#playerListItem1');
        this.playerListItem2 = Selector('#playerListItem2');

        this.questionCellItem1 = Selector('#questionCell1');
        this.questionCellItem2 = Selector('#questionCell2');
        this.answerInput = Selector('#answerInput');
        this.answerSubmitButton = Selector('#answerSubmitButton');
        this.backButton = Selector('#backButton');
    }
}