function callback(chart) {
  chart.renderer
    .label(
      'This label is added in the callback.<br>Highcharts version ' +
        Highcharts.version,
      100,
      100
    )
    .attr({
      id: 'renderer-callback-label',
      fill: '#90ed7d',
      padding: 10,
      r: 10,
      zIndex: 10
    })
    .css({
      color: 'black',
      width: '100px'
    })
    .add();
}
