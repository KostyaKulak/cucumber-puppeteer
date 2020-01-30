const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "https://www.talenya.com/contact-us/";

class ContactUs {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.company = "";
        this.title = "";
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

    setOptionalFields(phone, company, title) {
        this.phone = phone;
        this.company = company;
        this.email = title;
    }

    async writeFirstName() {
        const firstnameSelector = "[name='firstname']";
        await this.page.waitForSelector(firstnameSelector);
        this.firstnameElement = await this.page.$(firstnameSelector);
        await this.firstnameElement.type(this.firstname);
    }

    async writeLastName() {
        const lastnameSelector = "[name='lastname']";
        await this.page.waitForSelector(lastnameSelector);
        this.lastnameElement = await this.page.$(lastnameSelector);
        await this.lastnameElement.type(this.lastname);
    }

    async writeEmail() {
        const emailSelector = "[name='email']";
        await this.page.waitForSelector(emailSelector);
        this.emailElement = await this.page.$(emailSelector);
        await this.emailElement.type(this.email);
    }

    async writePhone() {
        const phoneSelector = "[name='lastname']";
        await this.page.waitForSelector(phoneSelector);
        this.phoneElement = await this.page.$(phoneSelector);
        await this.phoneElement.type(this.phone);
    }

    async writeCompany() {
        const companySelector = "[name='company']";
        await this.page.waitForSelector(companySelector);
        this.companyElement = await this.page.$(companySelector);
        await this.companyElement.type(this.company);
    }

    async writeTitle() {
        const titleSelector = "[name='jobtitle']";
        await this.page.waitForSelector(titleSelector);
        this.titleElement = await this.page.$(titleSelector);
        await this.titleElement.type(this.title);
    }

    async submit() {
        const submitSelector = "[type='submit']";
        await this.page.waitForSelector(submitSelector);
        this.submitElement = await this.page.$(submitSelector);
        await this.page.setRequestInterception(true);
        this.page.on("response", response => {
            if (request.url().includes("forms.hsforms.com")) {
                expect(response.status()).to.equal(200);
            }
        });
        await this.submitElement.click();
    }

    async closeContactUsPage() {
        await this.browser.close();
    }
}

setWorldConstructor(ContactUs);