Feature: Test Mercury Travels Smoke scenario
  Scenario Outline: Test login with valid credentials
    Given Open firefox and start application
    When I enter valid "<username>" and valid "<password>"
    Then User should be able to login sucessfully
    Then Applicagtion should be closed
    Examples:
      | username | password |
      | mercury  | mercury  |
      | baba     | mama     |
      | chaca    | kaki     |
      | dada     | dadi     |