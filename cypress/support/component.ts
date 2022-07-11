/// <reference types="cypress" />

// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import { mount, MountOptions } from '@cypress/react';
// Import commands.js using ES2015 syntax:
import './commands';
// endure global styles are imported

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       mount: typeof mount
//     }
//   }
// }

// Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(<MyComponent />)

/**
 * @see https://docs.cypress.io/api/commands/mount#Creating-a-New-cy-mount-Command
 */
Cypress.Commands.add(
  'mount',
  (component: React.ReactNode, options?: MountOptions) => {
    return mount(component, options);
  }
);
