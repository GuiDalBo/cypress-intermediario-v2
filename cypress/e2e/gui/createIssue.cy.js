/// <reference types = "Cypress"/>
import { faker } from '@faker-js/faker' 

describe('Creates a new issue on GitLab', () => {

      const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
      }
    
      beforeEach(() => {
        cy.api_deleteProjects()
        cy.api_createProject(issue.project)
        cy.login()
      })
    
      it('successfully', () => {
        cy.gui_createIssue(issue)
    
        cy.get('.issue-details')
          .should('contain', issue.title)
          .and('contain', issue.description)
      })
    })



//     beforeEach(() => {
//         cy.login()
//     })

    
//     it('successfully', () => {
//     const issue = {
//         title: `Title-${faker.random.words(2)}`,
//         description: faker.random.words(5)
//     }
    
//         cy.visit('/root/project-dcb26926-71b4-4fb3-88b4-22ec289a5bcf/issues')
//         cy.get('#new_issue_link').click()
//         cy.get('#issue_title').type(issue.title)
//         cy.get('#issue_description').type(issue.description)
//         cy.get('.qa-issuable-create-button').click()
//         cy.get('div').should('have.class', 'title-container')
//         .and('be.visible')
//         .and('have.text', 'Title')
//     })
//   })