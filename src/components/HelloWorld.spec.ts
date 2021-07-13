/// <reference types="cypress" />
import { mount } from '@cypress/vue'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders a message', () => {
    const msg = 'Hello Cypress Component Testing!'

    // 使用 import { defineComponent } from 'vue'; 時， propsData 會出現 typing 抱錯
    mount(HelloWorld, {
      props: {
        msg
      }
    })

    cy.get('h1').should('have.text', msg)
  })
})