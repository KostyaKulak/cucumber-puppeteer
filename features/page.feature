Feature: Page
  In order to complete task
  As I user
  I want to test talenya.com

  Scenario: verify status code
    Given I have a to enter "Ivan" and "Ivanov" and "ivanov666@gmail.com"
    When I write firstname in the input field
    When I write lastname in the input field
    When I write email in the input field
    And I click submit
    Then I expect to get "200 OK" status code