Feature: Login
    In order to manage the data I have entered into the app
    As a user
    I want to log in to my account

    Scenario: Login success
        Given I have navigated to '/login'
        When I enter 'email@example.com' into the field with the 'type' of 'email'
        And I enter 'password' into the field with the 'type' of 'password'
        And I click on the element with the 'type' of 'submit'
        Then I should be directed to '/'

    Scenario: Login fail
        Given I have navigated to '/login'
        When I enter 'email@example.com' into the field with the 'type' of 'email'
        And I enter 'wrong' into the field with the 'type' of 'password'
        And I click on the element with the 'type' of 'submit'
        Then I should be presented with an element with the 'data-def' of 'modal - login failed'

    Scenario: Login fail - no data
        Given I have navigated to '/login'
        And I click on the element with the 'type' of 'submit'
        Then I should be presented with an element with the 'data-def' of 'tooltip - required - username'
        And I should be presented with an element with the 'data-def' of 'tooltip - required - password'
