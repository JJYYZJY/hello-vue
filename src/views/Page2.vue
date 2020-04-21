<template>
  <div>
    page2
    <br />
    <Chart style="height: 400px" :option="chartOption" />
  </div>
</template>

<script>
import Chart from "../components/Chart";
export default {
  data() {
    return {
      // 指定图表的配置项和数据
      chartOption: {
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
      }
    };
  },
  components: {
    Chart
  }
};
</script>
<style scoped></style>
