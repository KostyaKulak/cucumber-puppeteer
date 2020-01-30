const { Given, When, Then, After, Before, setDefaultTimeout } = require("cucumber");

setDefaultTimeout(60 * 1000);

Before(async function(testCase) {
    return await this.openContactUsPage();
});

After(async function() {
    return await this.closeContactUsPage();
});

Given("I have a to enter mWhenatory fields {string} When {string} When {string}", function(firstname, lastname, email) {
    this.setFields(firstname, lastname, email);
});

Given("I have a to enter optional fields {string} When {string} When {string}", function(phone, company, title) {
    this.setOptionalFields(phone, company, title);
});

When("I write firstname in the input field", async function() {
    return await this.writeFirstName();
});

When("I write lastname in the input field", async function() {
    return await this.writeLastName();
});

When("I write email in the input field", async function() {
    return await this.writeEmail();
});

When("I write phone in the input field", async function() {
    return await this.writePhone();
});

When("I write company name in the input field", async function() {
    return await this.writeCompany();
});

When("I write title in the input field", async function() {
    return await this.writeTitle();
});

Then("I click submit", async function() {
    return await this.submit();
});