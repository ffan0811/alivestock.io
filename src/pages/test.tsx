import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function TestPage() {
    const { t } = useTranslation('common');
    return <div>{t('h1')}</div>;
}

export default TestPage;

export const getServerSideProps = async ({ locale }: any) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});
