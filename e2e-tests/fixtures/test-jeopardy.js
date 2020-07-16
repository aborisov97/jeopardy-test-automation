import Page from '../pages/page-jeopardy';
import { environment } from '../environments/environment'

fixture `Jeopardy Game Start`
    .page `http://localhost:${environment.project.vue}`;

const page = new Page();

test('Enter Answers', async t => {
    await t
        .typeText(page.playerNumberInput, '3')
        .click(page.playerNumberButton)
        .click(page.questionCategoryListItem)
        .click(page.startGameButton)
        .expect(page.jeopardyWindow.exists).ok();
    await t
        .click(page.questionCellItem1)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 0');
    await t
        .click(page.questionCellItem2)
        .typeText(page.answerInput, 'Central Europa')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 100');
});