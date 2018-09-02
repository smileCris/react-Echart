import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import ReactEcharts from 'echarts-for-react'

class RentIncome extends React.Component {
  constructor(props) {
    super(props)
    const rentIncomeSeries = props.dashboard.rentIncomeSeries
    this.state = {
      rentIncomeSeries,
    }
    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['洗衣机', '干洗机']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: rentIncomeSeries
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

RentIncome.propTypes = {
  rentIncomeSeries: PropTypes.array
};

export default connect(({ dashboard }) => ({ dashboard }))(RentIncome)