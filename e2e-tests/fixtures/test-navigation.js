import Page from '../pages/page-navigation';
import { environment } from '../environments/environment'

fixture `Navigation`
    .page `http://localhost:${environment.project.vue}`;

const page = new Page();

test('Navigation test', async t => {
    await t
        .click(page.toggleNavbar)
        .click(page.aboutLink)
        .click(page.homeLink)
        .expect(page.playerNumberInput.exists).ok();
});