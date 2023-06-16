import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels);

export { default as VerticalBarChart } from '@/components/Dashboard/VerticalBarChart.vue';
export { default as HorizontalBarChart } from '@/components/Dashboard/HorizontalBarChart.vue';
export { default as LineChart } from '@/components/Dashboard/CustomLineChart.vue';
export { default as HalfDoughnutChart } from '@/components/Dashboard/HalfDoughnutChart.vue';
export { default as DoughnutChart } from '@/components/Dashboard/CustomDoughnutChart.vue';
