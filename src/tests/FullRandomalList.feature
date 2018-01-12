Feature: Full item list
    In order to engage in the community of the app and provoke comminications
    As a user
    I need to be able to see a list of the communities public Randomals

    Scenario: New list (no data)
        Given I have access to the Randomals list
        When 6 Randomals are added
        Then the number of Randomals should be 6

    Scenario: Add a randomal
        Given I have access to the Randomals list
        When 6 Randomals are added
        And I add 1 Randomal
        Then the number of Randomals should be 7

    Scenario: Add multiple randomals
        Given I have access to the Randomals list
        When 6 Randomals are added
        And I add 2 Randomals
        Then the number of Randomals should be 8

    Scenario: Remove randomals
        Given I have access to the Randomals list
        When 6 Randomals are added
        And I add 10 Randomals
        And I remove 1 Randomal
        Then the number of Randomals should be 15

    Scenario: Remove too many randomals
        Given I have access to the Randomals list
        When 6 Randomals are added
        And I add 1 Randomals
        And I remove 2 Randomals
        Then the number of Randomals should be 6
