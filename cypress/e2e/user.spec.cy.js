import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href = '/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    saveField: "[type='submit']"
    
  }

  it.only('Login - Sucess', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userSucess.username);
    cy.get(selectorsList.passwordField).type(userData.userSucess.password);
    cy.get(selectorsList.loginButton).click();
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index');
    cy.get(selectorsList.dashboardGrid);
    cy.get(selectorsList.myInfoButton).click();
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest');
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest');
    cy.get(selectorsList.genericField).eq(3).clear().type(' 1424');
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest');
    cy.get(selectorsList.genericField).eq(5).clear().type('1234456');
    cy.get(selectorsList.dateField).eq(0).clear().type('2026-10-26{enter}');
    cy.get(selectorsList.saveField).eq(0).click();
  })

  it('Login - Fail', () => {w
    cy.visit('/auth/login');
    cy.get(selectorsList.usernameField).type(userData.userFail.username);
    cy.get(selectorsList.passwordField).type(userData.userFail.password);
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert);
  })

})