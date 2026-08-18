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
import enDashboard from '../locales/en/dashboard.json'
import arDashboard from '../locales/ar/dashboard.json'
import enMonitoring from '../locales/en/monitoring.json'
import arMonitoring from '../locales/ar/monitoring.json'
import enEmployees from '../locales/en/employees.json'
import arEmployees from '../locales/ar/employees.json'

const savedLanguage = localStorage.getItem('lang') || 'en'

i18n.use(initReactI18next).init({
    resources:{
        en:{
            sidebar:enSidebar,
            common:enCommon,
            login:enLogin,
            register:enRegister,
            forgotPassword:enForgotPassword,
            dashboard:enDashboard,
            monitoring:enMonitoring,
            employees:enEmployees
        },
        ar:{
            sidebar:arSidebar,
            common:arCommon,
            login:arLogin,
            register:arRegister,
            forgotPassword:arForgotPassword,
            dashboard:arDashboard,
            monitoring:arMonitoring,
            employees:arEmployees
        }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation:{
        escapeValue:false
    }
})

const updateDirection = (language:string)=>{
     const direction = language.startsWith("ar") ? "rtl" : "ltr";
      document.documentElement.lang = language;
    document.documentElement.dir = direction;
}

updateDirection(savedLanguage)


i18n.on("languageChanged" , (language)=>{
    localStorage.setItem("lang", language);
    updateDirection(language);
})

export default i18n