const localeMap: Record<string, string> = {
  ar: "ar-EG",
  en: "en-US",
};


export const formatNumber = (
    value: number,
    locale: string
) => {
    return new Intl.NumberFormat(localeMap[locale] ?? locale).format(value);
};

export const formatCurrency = (
    value: number,
    locale: string,
    currency = "EGP"
) => {
    return new Intl.NumberFormat(localeMap[locale] ?? locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(value);
};

export const formatPercent = (
    value: number,
    locale: string
) => {
    return new Intl.NumberFormat(localeMap[locale] ?? locale, {
        style: "percent",
        maximumFractionDigits: 0,
    }).format(value / 100);
};

export const formatDate = (
    value: Date | string,
    locale: string
) => {
    return new Intl.DateTimeFormat(localeMap[locale] ?? locale, {
        day: "numeric",
        month: "short",
        year: "numeric",
    }).format(new Date(value));
};

export const formatTime = (
    value: Date | string,
    locale: string
) => {
    return new Intl.DateTimeFormat(localeMap[locale] ?? locale, {
        hour: "numeric",
        minute: "2-digit",
    }).format(new Date(value));
};