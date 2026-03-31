$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./featureFiles/ERP.feature");
formatter.feature({
  "name": "",
  "description": "As admin user i want to validate suppliers and customers Modules",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "As admin user i want to test customer with Multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user should navigate to add customer page",
  "keyword": "When "
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.step({
  "name": "User enters customer Details \"\u003cName\u003e\", \"\u003cAddress\u003e\", \"\u003cCity\u003e\", \"\u003cCountry\u003e\", \"\u003cPerson\u003e\", \"\u003cPhone\u003e\", \"\u003cEmail\u003e\", \"\u003cMobile\u003e\", \"\u003cNotes\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.step({
  "name": "user click confirm ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.step({
  "name": "user verify customer number in table",
  "keyword": "Then "
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.step({
  "name": "user click customer link",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Address",
        "City",
        "Country",
        "Person",
        "Phone",
        "Email",
        "Mobile",
        "Notes"
      ]
    },
    {
      "cells": [
        "Alice W1",
        "Lane 55",
        "London",
        "UK",
        "Alice",
        "1122334455",
        "alice@test.com",
        "5544332211",
        "Retail"
      ]
    },
    {
      "cells": [
        "Alice W3",
        "Lane 57",
        "London",
        "UK",
        "Alice",
        "1122334455",
        "alice@test.com",
        "5544332211",
        "Retail"
      ]
    },
    {
      "cells": [
        "Alice W5",
        "Lane 56",
        "London",
        "UK",
        "Alice",
        "1122334455",
        "alice@test.com",
        "5544332211",
        "Retail"
      ]
    },
    {
      "cells": [
        "Alice W5",
        "Lane 54",
        "London",
        "UK",
        "Alice",
        "1122334455",
        "alice@test.com",
        "5544332211",
        "Retail"
      ]
    }
  ]
});
formatter.background({
  "name": "Successful Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin user i want to test customer with Multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user should navigate to add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_should_navigate_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters customer Details \"Alice W1\", \"Lane 55\", \"London\", \"UK\", \"Alice\", \"1122334455\", \"alice@test.com\", \"5544332211\", \"Retail\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_enters_customer_Details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_confirm_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.user_verify_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click customer link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Successful Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin user i want to test customer with Multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user should navigate to add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_should_navigate_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters customer Details \"Alice W3\", \"Lane 57\", \"London\", \"UK\", \"Alice\", \"1122334455\", \"alice@test.com\", \"5544332211\", \"Retail\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_enters_customer_Details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_confirm_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.user_verify_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click customer link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Successful Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin user i want to test customer with Multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user should navigate to add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_should_navigate_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters customer Details \"Alice W5\", \"Lane 56\", \"London\", \"UK\", \"Alice\", \"1122334455\", \"alice@test.com\", \"5544332211\", \"Retail\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_enters_customer_Details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_confirm_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.user_verify_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click customer link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "name": "Successful Login",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launchUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"admin\" and password \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dashboard should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.dashboard_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As admin user i want to test customer with Multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customers"
    }
  ]
});
formatter.step({
  "name": "user should navigate to add customer page",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_should_navigate_to_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user capture customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_capture_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters customer Details \"Alice W5\", \"Lane 54\", \"London\", \"UK\", \"Alice\", \"1122334455\", \"alice@test.com\", \"5544332211\", \"Retail\"",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_enters_customer_Details(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click add button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click confirm ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_confirm_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click alert ok button",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_click_alert_ok_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for customer number",
  "keyword": "And "
});
formatter.match({
  "location": "ERPSteps.user_search_for_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify customer number in table",
  "keyword": "Then "
});
formatter.match({
  "location": "ERPSteps.user_verify_customer_number_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.user_close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click customer link",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});