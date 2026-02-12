// Dependencies
import 'styled-components';

// Utils
import { Theme } from '.';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
