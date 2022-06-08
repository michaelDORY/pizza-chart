import {Chart} from "@antv/g2";
import {Product} from "../utils/types";

const renderChart = (data: Product[], containerName: string) => {
  if(!document.getElementById('chartContainer')) return;
  const chart = new Chart({
    container: containerName,
    autoFit: true,
    height: 300,
    padding: 20
  });
  chart.data(data);
  chart.scale('type', {
    range: [0, 1]
  });
  chart.coordinate('polar');
  chart.legend(false);
  chart.axis('priceGroup', {
    grid: {
      alignTick: false,
      line: {
        style: {
          lineDash: [0, 0]
        },
      },
    },
  });
  chart
    .point()
    .adjust('jitter')
    .position('priceGroup*type')
    .color('priceGroup')
    .shape('circle')
    .style({
      fillOpacity: 0.85,
    })
  chart.render();
}

export default renderChart;
