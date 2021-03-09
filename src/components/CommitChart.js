import { Line } from 'vue3-chart-v2'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Jobs',
                borderColor: 'rgba(59, 130, 246)',
                borderWidth: 1,
                backgroundColor: 'rgb(183 190 213 / 20%)',
                pointBackgroundColor: 'rgba(59, 130, 246)',
                pointRadius: 5,
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            }
        }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
