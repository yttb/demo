<template>
  <div ref="chart" style="width:100%;height:376px"></div>
</template>
<script>

export default {
  mounted() {
    const chart = this.$refs.chart
    const myChart = this.$echarts.init(chart);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
    option && myChart.setOption(option)
    window.addEventListener("resize", function () {
      myChart.resize()
    })
  },
}
</script>