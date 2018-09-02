import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'

class Scoring extends React.Component {
  constructor(props) {
    super(props)
    const scoringSeries = props.dashboard.scoringSeries
    this.state = {
      scoringSeries,
    }
    const option = {
      color: ['rgba(153, 204, 255, 1)'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['评分']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['0星', '1星', '2星', '3星', '4星', '5星']
        }
      ],
      yAxis: [
        {
          name: '单位/次',
          type: 'value',
          splitLine: {
            show: false
          },
        }
      ],
      series: scoringSeries,
    }
    this.state = {
      option,
    }
  }

  render() {
    return (
      <div>
        <ReactEcharts
          option={this.state.option}
          style={{ height: '400px', width: '100%' }}
        />
      </div>
    )
  }
}

Scoring.propTypes = {
  scoringSeries: PropTypes.array
};

export default connect(({ dashboard }) => ({ dashboard }))(Scoring)