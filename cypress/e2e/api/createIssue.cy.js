import { faker } from '@faker-js/faker'

describe('Create a new issue', () => {

    beforeEach(() => {
        cy.api_deleteProjects()
      })

  it('successfully', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
      }

    cy.api_createIssue(issue)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(issue.name)
        expect(response.body.description).to.equal(issue.description)
      })
  })
})