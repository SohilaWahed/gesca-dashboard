import { formatCurrency, formatDate, formatNumber, formatPercent, formatTime } from "@/utils/formatNumberLang";
import { useTranslation } from "react-i18next";

export default function useFormatter() {

  const { i18n } = useTranslation();

  return {
    number: (value: number) => formatNumber(value, i18n.language),
    currency: (value: number) => formatCurrency(value, i18n.language),
    percent: (value: number) => formatPercent(value, i18n.language),
    date: (value: Date | string) => formatDate(value, i18n.language),
    time: (value: Date | string) => formatTime(value, i18n.language),
  };
}
