import { FunctionComponent } from 'react';
import { I18nProvider } from '../types';
interface Props {
    locale?: string;
    i18nProvider: I18nProvider;
}
/**
 * Creates a translation context, available to its children
 *
 * @example
 *     const MyApp = () => (
 *         <Provider store={store}>
 *             <TranslationProvider i18nProvider={i18nProvider}>
 *                 <!-- Child components go here -->
 *             </TranslationProvider>
 *         </Provider>
 *     );
 */
declare const TranslationProvider: FunctionComponent<Props>;
export default TranslationProvider;
