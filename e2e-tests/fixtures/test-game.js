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



        await t
        .click(page.questionCellItem3)
        .typeText(page.answerInput, '3')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 100');
        await t
        .click(page.questionCellItem4)
        .typeText(page.answerInput, '3')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 100');
        await t
        .click(page.questionCellItem5)
        .typeText(page.answerInput, '3')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 300');
        await t
        .click(page.questionCellItem6)
        .typeText(page.answerInput, '3')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 300');


        await t
        .click(page.questionCellItem7)
        .typeText(page.answerInput, '3')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 300');
        await t
        .click(page.questionCellItem8)
        .typeText(page.answerInput, '82 Mio')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 500');
        await t
        .click(page.questionCellItem9)
        .typeText(page.answerInput, '82 Mio')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 600');



        await t
        .click(page.questionCellItem10)
        .typeText(page.answerInput, '82 Mio')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 600');
        await t
        .click(page.questionCellItem11)
        .typeText(page.answerInput, '82 Mio')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 800');
        await t
        .click(page.questionCellItem12)
        .typeText(page.answerInput, 'sandaime')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 900');

        await t
        .click(page.questionCellItem13)
        .typeText(page.answerInput, 'Rügen')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem14)
        .typeText(page.answerInput, 'Rügen')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem15)
        .typeText(page.answerInput, 'Rügen')
        .click(page.answerSubmitButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');


        await t
        .click(page.questionCellItem16)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');

        await t.click(page.nexRoundButton);
    
        await setTimeout(() => {
            console.log('ok')
        }, 2000);

        await t
        .expect(page.jeopardyWindow.exists).ok();

        await t
        .click(page.questionCellItem1)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem2)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');
        await t
        .click(page.questionCellItem3)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem4)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem5)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');
        await t
        .click(page.questionCellItem6)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem7)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem8)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');
        await t
        .click(page.questionCellItem9)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem10)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem11)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');
        await t
        .click(page.questionCellItem12)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem13)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.questionCellItem14)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem3.innerText).eql('Spieler 3: 1300');
        await t
        .click(page.questionCellItem15)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem1.innerText).eql('Spieler 1: 1000');
        await t
        .click(page.questionCellItem16)
        .typeText(page.answerInput, 'Wrong Answer')
        .click(page.answerSubmitButton)
        .click(page.backButton)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');


        await t.click(page.nexRoundButton);

        await t
        .typeText(page.finalInput, 'BERLIN')
        .typeText(page.range, '800')
        .click(page.finalSubmit)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .typeText(page.finalInput, 'WRONG')
        .typeText(page.range, '400')
        .click(page.finalSubmit)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .typeText(page.finalInput, 'BERLIN')
        .typeText(page.range, '100')
        .click(page.finalSubmit)
        .expect(page.playerListItem2.innerText).eql('Spieler 2: 1200');
        await t
        .click(page.finale);

        await t.click(page.nexRoundButton);
});