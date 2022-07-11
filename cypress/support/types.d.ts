import { MountReturn, MountOptions } from '@cypress/react';
import { MemoryRouterProps } from 'react-router-dom';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}
// login(email: string, password: string): Chainable<void>
// drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
