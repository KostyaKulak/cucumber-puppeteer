const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "https://www.talenya.com/contact-us/";

class ContactUs {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
    }

    async openContactUsPage() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        await this.page.goto(PAGE);
    }

    setFields(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    async writeFirstName() {
        const firstnameSelector = "[name='firstname']";
        await this.page.waitForSelector(firstnameSelector);
        this.firstnameElement = await this.page.$(firstnameSelector);
        await this.firstnameElement.type(this.firstname);
    }

    async writeLastname() {
        const lastnameSelector = "[name='lastname']";
        await this.page.waitForSelector(lastnameSelector);
        this.emailElement = await this.page.$(lastnameSelector);
        await this.emailElement.type(this.lastname);
    }

    async writeEmail() {
        const emailSelector = "[name='email']";
        await this.page.waitForSelector(emailSelector);
        this.emailElement = await this.page.$(emailSelector);
        await this.emailElement.type(this.email);
    }

    async submit() {
        await this.inputElement.press("Enter");
    }

    // async checkTodoIsInList() {
    //     const todoSelector = "ul.todo-list li label";
    //     await this.page.waitForSelector(todoSelector);
    //     const todo = await this.page.evaluate(
    //         todoSelector => document.querySelector(todoSelector).innerText,
    //         todoSelector
    //     );
    //     expect(this.todo).to.eql(todo);
    // }

    async closeContactUsPage() {
        await this.browser.close();
    }
}

setWorldConstructor(ContactUs);