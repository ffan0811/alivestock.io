import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
    dsn: 'https://5d6d598a8b864eba97061875285beadc@o540138.ingest.sentry.io/5902989',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

Sentry.setTag('app_name', 'testglider');

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default appWithTranslation(MyApp);
