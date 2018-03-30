import { PolarChart1js, PolarChart2js } from './ChartJsPolarCharts';
import { animationSequencer } from './animationSequencer';

animationSequencer(document.getElementById("animateHeader").children, "flipInX", 2000);
PolarChart1js("myChart");
PolarChart2js("myChart2")