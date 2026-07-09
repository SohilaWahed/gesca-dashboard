import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import enSidebar from '../locales/en/sidebar.json'
import arSidebar from '../locales/ar/sidebar.json'
import enCommon from '../locales/en/common.json'
import arCommon from '../locales/ar/common.json'

i18n.use(initReactI18next).init({
    resources:{
        en:{
            sidebar:enSidebar,
            common:enCommon
        },
        ar:{
            sidebar:arSidebar,
            common:arCommon
        }
    },
    lng:localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    interpolation:{
        escapeValue:false
    }
})



export default i18n