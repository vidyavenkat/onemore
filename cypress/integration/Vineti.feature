Feature: Vineti functionality

Scenario: As a User, add Samsung Galaxy S6 
  Given the user navigates to the site
  When signup for new account
  And the user logs into the site
  And add samsung s6 to the cart
  Then see the added mobile in the cart
