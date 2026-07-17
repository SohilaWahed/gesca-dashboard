import { backgroundColor, topProducts } from '@/mock/dashboard/topProducts';
import { Doughnut } from "react-chartjs-2"
import type { Plugin } from "chart.js";
import { useTheme } from '@/hooks/useTheme';
import { useTranslation } from 'react-i18next';

const dataChartSetup = {
    labels: topProducts.map((prod) => prod.name),
    datasets: [{
        label: 'Units of Sales ',
        data: topProducts.map((prod) => prod.sales),
        backgroundColor: backgroundColor,
        hoverOffset: 4
    }]
};
const doughnutOptions = {
    responsive: true,

    cutout: "70%",

    plugins: {
        legend: {
            display: false,
        },

        tooltip: {
            enabled: true,
        },

        maintainAspectRatio: false
    },
}
const total = topProducts.map((prod) => prod.percentage).reduce(
    (sum, value) => sum + Number(value),
    0
);

export default function TopProductsChart() {
    const {t} = useTranslation("dashboard")
    const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",

    afterDraw(chart) {
        const { ctx } = chart;
        const meta = chart.getDatasetMeta(0);

        if (!meta.data.length) return;

        const x = meta.data[0].x;
        const y = meta.data[0].y;

        ctx.save();

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const foreground = getComputedStyle(document.documentElement)
            .getPropertyValue("--foreground")
            .trim();

        ctx.font = "700 28px Inter";
        // ctx.fillStyle = "#111827";
        ctx.fillStyle = `${foreground}`;
        ctx.fillText(`${total}%`, x, y - 10);

        const muted = getComputedStyle(document.documentElement)
            .getPropertyValue("--muted-foreground")
            .trim();
        ctx.font = "500 14px Inter";
        // ctx.fillStyle = "#6B7280";
        ctx.fillStyle = `${muted}`;
        ctx.fillText(t("topProducts.centerLabel"), x, y + 18);

        ctx.restore();
    },
};
    const { theme } = useTheme()
    return (
        <Doughnut key={theme} data={dataChartSetup} options={doughnutOptions} plugins={[centerTextPlugin]} />
    )
}
