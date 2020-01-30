const { Given, When, Then, After, Before } = require("cucumber");

Before(async function(testCase) {
  return await this.openContactUsPage();
});

After(async function() {
  return await this.closeContactUsPage();
});

Given("I have a to enter {string} and {string} and {string}", function(firstname, lastname, email) {
  this.setFields(firstname, lastname, email);
});

When("I write firstname in the input field", async function() {
  return await this.writeFirstName();
});

When("I write lastname in the input field", async function() {
  return await this.writeLasstName();
});

When("I write email in the input field", async function() {
  return await this.writeEmail();
});

When("I click submit", async function() {
  return await this.submit();
});

Then("I expect to get {string} status code", async function(code) {
//   return await this.checkTodoIsInList();
});