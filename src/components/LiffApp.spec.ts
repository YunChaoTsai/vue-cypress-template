/// <reference types="cypress" />
import { mount } from "@cypress/vue";
import LiffApp from "./LiffApp.vue";
import liff from '@line/liff';

describe("HelloWorld", () => {
  // beforeEach(() => {
  //   Cypress.sinon.replace(liff, 'ready', Promise.resolve());
  // });

  // afterEach(() => {
  //   Cypress.sinon.restore();
  // })

  it("should has liff id", () => {
    const msg = "My liff id: 1585775582-lXPkeW6G";

    // 使用 import { defineComponent } from 'vue'; 時， propsData 會出現 typing 抱錯
    mount(LiffApp, {
      props: {
        liffId: "1585775582-lXPkeW6G",
      },
    });

    cy.get(".hello").should("have.text", msg);
  });

  it("should call liff init", () => {
    cy.stub(liff, 'init').as('liffInitSuccess').resolves();

    mount(LiffApp, {
      props: {
        liffId: "1585775582-lXPkeW6G",
      },
    });
    cy.get('.click').should('not.exist');
    cy.get('button').should('exist').click();
    cy.get('.click').should('exist');

    cy.get('@liffInitSuccess')
      .should('be.calledWithExactly', { liffId: "1585775582-lXPkeW6G" });
  });
});
