@tag
Feature: 
As admin user i want to validate suppliers and customers Modules
 Background: Successful Login
    Given User is on the Login Page
    When User enters username "admin" and password "master"
    And clicks on Login button
    Then Dashboard should be displayed
@Suppliers
Scenario Outline:
As admin user i want to test suppliers with Multiple data
When user should navigate to add supplier page
And user capture Supplier number
And User enters Supplier Details "<Name>", "<Address>", "<City>", "<Country>", "<Person>", "<Phone>", "<Email>", "<Mobile>", "<Notes>"
And user click add button
And user click confirm ok button
And  user click alert ok button
And user search for supplier number
Then user verify supplier number in table
When user close browser
Examples:
|Name|Address|City|Country|Person|Phone|Email|Mobile|Notes|
|Dell Corp1| Street 12| New York|USA|Akhiles61| 1234567890|dell@test.com|9876543210|High|
|Dell Corp2| Street 13| New York|USA|Akhiles71| 1234567890|dell@test.com|9876543210|High|
|Dell Corp3| Street 14| New York|USA|Akhiles31| 1234567890|dell@test.com|9876543210|High|
|Dell Corp4| Street 15| New York|USA|Akhiles81| 1234567890|dell@test.com|9876543210|High|
|Dell Corp5| Street 16| New York|USA|Akhiles31| 1234567890|dell@test.com|9876543210|High|
@Customers
Scenario Outline:
As admin user i want to test customer with Multiple data
When user should navigate to add customer page
And user capture customer number
And User enters customer Details "<Name>", "<Address>", "<City>", "<Country>", "<Person>", "<Phone>", "<Email>", "<Mobile>", "<Notes>"
And user click add button
And user click confirm ok button
And  user click alert ok button
And user search for customer number
Then user verify customer number in table
When user close browser
Examples:
|Name|Address|City|Country|Person|Phone|Email|Mobile|Notes|
| Alice W1  | Lane 55   | London | UK       | Alice   | 1122334455 | alice@test.com | 5544332211 | Retail |
| Alice W3  | Lane 57   | London | UK       | Alice   | 1122334455 | alice@test.com | 5544332211 | Retail |
| Alice W5  | Lane 56   | London | UK       | Alice   | 1122334455 | alice@test.com | 5544332211 | Retail |
| Alice W5  | Lane 54   | London | UK       | Alice   | 1122334455 | alice@test.com | 5544332211 | Retail |
