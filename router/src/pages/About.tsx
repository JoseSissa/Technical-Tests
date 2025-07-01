import { Link } from '../components/Link'
import type { I18nType } from '../types/types'

const i18n: I18nType = {
    en: {
        title: 'About',
        description: 'This is the about page in English',
        home: 'Home',
        info: 'Info',
    },
    es: {
        title: 'Acerca de',
        description: 'Esta es la página de acerca de en Español',
        home: 'Inicio',
        info: 'Info',
    },
}

const useI18n = (lang: string) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }: { routeParams: { lang: string } }) {
    const i18n = useI18n(routeParams.lang ?? 'en')
    return (
        <>
            <h1>{i18n.title}</h1>
            <p>{i18n.description}</p>
            {/* <button onClick={() => navigate('/')}>Home</button> */}
            <Link to="/">{i18n.home}</Link>
            <Link to="/info">{i18n.info}</Link>
        </>
    )
}