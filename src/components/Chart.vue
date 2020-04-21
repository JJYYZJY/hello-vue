<template>
  <div ref="chartDom" style="height: 400px"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.chart = echarts.init(this.$refs.chartDom);
    addListener(this.$refs.chartDom, this.resize);
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    this.chart.setOption(option);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
    }
  }
};
</script>
<style scoped></style>
