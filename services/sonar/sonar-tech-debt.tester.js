'use strict'

const { ServiceTester } = require('../tester')
const { isIntegerPercentage } = require('../test-validators')

const t = (module.exports = new ServiceTester({
  id: 'SonarTechDebt',
  title: 'SonarTechDebt',
  pathPrefix: '/sonar',
}))

t.create('Tech Debt')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/tech_debt.json'
  )
  .expectBadge({
    label: 'tech debt',
    message: isIntegerPercentage,
  })

t.create('Tech Debt (legacy API supported)')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals%3Apetals-se-ase/tech_debt.json?version=4.2'
  )
  .expectBadge({
    label: 'tech debt',
    message: isIntegerPercentage,
  })
