import { MountReturn, MountOptions } from '@cypress/react';

declare global {
  namespace Cypress {
    interface Chainable<Subject = MountReturn> {
      mount(
        component: React.ReactNode,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

// login(email: string, password: string): Chainable<void>
// drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
