
export const CHART_COLORS = {
    blue: 'rgb(54, 162, 235)',
    green: 'rgb(75, 192, 192)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    red: 'rgb(255, 99, 132)',
    grey: 'rgb(201, 203, 207)'
  };
  
  export const getRadius = (val:number, maxValue:number) => {
    if (val >= maxValue)  return 10;
    else if (val <= 1000) return 1;
    return Math.floor(val/maxValue);
  }