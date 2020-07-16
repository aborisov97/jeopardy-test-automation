import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.toggleNavbar = Selector('#toggleNavbar');
        this.homeLink = Selector('#homeLink');
        this.aboutLink = Selector('#aboutLink');
        this.playerNumberInput = Selector('#playerNumberInput');
    }
}