import i18n from "./i18n"

export default async function changeLang(currentLang:string) {
    if (currentLang === "en") {
        await i18n.changeLanguage("ar")
    } else {
        await i18n.changeLanguage("en")
    }
    localStorage.setItem("lang", i18n.language)
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language
}