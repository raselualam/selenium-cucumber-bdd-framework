$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Test Mercury Travels Smoke scenario",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Applicagtion should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 9,
      "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "baba",
        "mama"
      ],
      "line": 10,
      "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "chaca",
        "kaki"
      ],
      "line": 11,
      "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;4"
    },
    {
      "cells": [
        "dada",
        "dadi"
      ],
      "line": 12,
      "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"mercury\" and valid \"mercury\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Applicagtion should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Scripting.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 5689095997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 15
    },
    {
      "val": "mercury",
      "offset": 35
    }
  ],
  "location": "Scripting.i_enter_valid_user_Id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 473753325,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 2998782421,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.applicagtion_should_be_closed()"
});
formatter.result({
  "duration": 727894949,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"baba\" and valid \"mama\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Applicagtion should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Scripting.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 4690669131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "baba",
      "offset": 15
    },
    {
      "val": "mama",
      "offset": 32
    }
  ],
  "location": "Scripting.i_enter_valid_user_Id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 225717767,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 1139492915,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.applicagtion_should_be_closed()"
});
formatter.result({
  "duration": 638110992,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"chaca\" and valid \"kaki\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Applicagtion should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Scripting.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 5313857874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chaca",
      "offset": 15
    },
    {
      "val": "kaki",
      "offset": 33
    }
  ],
  "location": "Scripting.i_enter_valid_user_Id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 359949653,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 1356100178,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.applicagtion_should_be_closed()"
});
formatter.result({
  "duration": 373894125,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-mercury-travels-smoke-scenario;test-login-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open firefox and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"dada\" and valid \"dadi\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Applicagtion should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "Scripting.open_firefox_and_start_application()"
});
formatter.result({
  "duration": 5303632113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dada",
      "offset": 15
    },
    {
      "val": "dadi",
      "offset": 32
    }
  ],
  "location": "Scripting.i_enter_valid_user_Id_and_valid_password(String,String)"
});
formatter.result({
  "duration": 226260186,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.user_should_be_able_to_login_sucessfully()"
});
formatter.result({
  "duration": 1144316217,
  "status": "passed"
});
formatter.match({
  "location": "Scripting.applicagtion_should_be_closed()"
});
formatter.result({
  "duration": 560115658,
  "status": "passed"
});
});