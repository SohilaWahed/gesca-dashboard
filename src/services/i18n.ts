import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import enSidebar from '../locales/en/sidebar.json'
import arSidebar from '../locales/ar/sidebar.json'
import enCommon from '../locales/en/common.json'
import arCommon from '../locales/ar/common.json'
import enLogin from '../locales/en/login.json'
import arLogin from '../locales/ar/login.json'
import enRegister from '../locales/en/register.json'
import arRegister from '../locales/ar/register.json'
import enForgotPassword from '../locales/en/forgotPassword.json'
import arForgotPassword from '../locales/ar/forgotPassword.json'


i18n.use(initReactI18next).init({
    resources:{
        en:{
            sidebar:enSidebar,
            common:enCommon,
            login:enLogin,
            register:enRegister,
            forgotPassword:enForgotPassword
        },
        ar:{
            sidebar:arSidebar,
            common:arCommon,
            login:arLogin,
            register:arRegister,
            forgotPassword:arForgotPassword
        }
    },
    lng:localStorage.getItem('lang') || 'en',
    fallbackLng: 'en',
    interpolation:{
        escapeValue:false
    }
})



export default i18n