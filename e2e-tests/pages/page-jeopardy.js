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
        this.playerListItem3 = Selector('#playerListItem3');


        this.questionCellItem1 = Selector('#questionCell1');
        this.questionCellItem2 = Selector('#questionCell2');
        this.questionCellItem3 = Selector('#questionCell3');
        this.questionCellItem4 = Selector('#questionCell4');
        this.questionCellItem5 = Selector('#questionCell5');
        this.questionCellItem6 = Selector('#questionCell6');
        this.questionCellItem7 = Selector('#questionCell7');
        this.questionCellItem8 = Selector('#questionCell8');
        this.questionCellItem9 = Selector('#questionCell9');
        this.questionCellItem10 = Selector('#questionCell10');
        this.questionCellItem11 = Selector('#questionCell11');
        this.questionCellItem12 = Selector('#questionCell12');
        this.questionCellItem13 = Selector('#questionCell13');
        this.questionCellItem14 = Selector('#questionCell14');
        this.questionCellItem15 = Selector('#questionCell15');
        this.questionCellItem16 = Selector('#questionCell16');

        this.answerInput = Selector('#answerInput');
        this.answerSubmitButton = Selector('#answerSubmitButton');
        this.backButton = Selector('#backButton');
        this.nexRoundButton = Selector("#nexRoundButton");
        this.finalInput = Selector('#finalInput');
        this.finalSubmit = Selector('#finalSubmit');
        this.finale = Selector('#finale');

    }
}