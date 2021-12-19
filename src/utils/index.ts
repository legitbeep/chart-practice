
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

export const filterData = (datas: Datas) => {
  const repeating:string[] = [], datasets:Record<string, number> = {}, values:Record<string, number[]> = {};
  const dataset = datas.data && datas.data.filter(d => {
      
    if(values[d.source]){
      values[d.source].push(d.value);
    } else {
      values[d.source] = [d.value];
    }
    if( !repeating.includes(d.source) ){
          repeating.push(d.source);
          if(!datasets[d.source]){
            datasets[d.source] = d.value;
          }
          else {
            datasets[d.source] += d.value;
          }
          return true;
      } else return false;
  })
  const labels = dataset?.map(data => data.source)
  const dataValues = Object.values(datasets);
  console.log(dataValues)
  return { labels ,dataValues: dataValues ? dataValues : undefined, values};
}
