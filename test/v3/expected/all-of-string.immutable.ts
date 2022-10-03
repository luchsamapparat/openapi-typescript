/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  readonly '/test': {
    readonly get: {
      readonly responses: {
        /** A list of types. */
        readonly 200: unknown
      }
    }
  }
}

export interface components {
  readonly schemas: {
    /** @description Object with one property that is a string enum */
    readonly Example: {
      readonly status?: components['schemas']['ExampleStatus']
    }
    /** @enum {string} */
    readonly ExampleStatus: 'ACTIVE' | 'INACTIVE'
  }
}

export interface operations {}

export interface external {}