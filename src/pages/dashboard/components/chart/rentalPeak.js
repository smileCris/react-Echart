import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'dva'
import { Card, DatePicker } from 'antd'
import ReactEcharts from 'echarts-for-react'

const dateFormat = 'YYYY/MM/DD'
const date = new Date()
const today = date.toLocaleDateString()
// 最近一周
const pastday = [
  new Date(date.getTime() - 6 * 24 * 3600 * 1000).toLocaleDateString(),
  new Date(date.getTime() - 5 * 24 * 3600 * 1000).toLocaleDateString(),
  new Date(date.getTime() - 4 * 24 * 3600 * 1000).toLocaleDateString(),
  new Date(date.getTime() - 3 * 24 * 3600 * 1000).toLocaleDateString(),
  new Date(date.getTime() - 2 * 24 * 3600 * 1000).toLocaleDateString(),
  new Date(date.getTime() - 1 * 24 * 3600 * 1000).toLocaleDateString(),
  today,
]

class RentalPeak extends React.Component {
  constructor(props) {
    super(props)
    const rentalPeakSeriesDate = props.dashboard.rentalPeakSeriesDate
    const option = {
      color: ['rgba(153, 204, 255, 1)', 'rgb(153, 153, 255)'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['洗衣机', '干洗机'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          // 获取动态数据
          data: [pastday[0], pastday[1], pastday[2], pastday[3], pastday[4], pastday[5], pastday[6]],
        }
      ],
      yAxis: [
        {
          name: '单位/次',
          type: 'value',
          splitLine: {
            show: false,
          },
        }
      ],
      series: [
        {
          name: '洗衣机',
          type: 'bar',
          // 获取动态数据
          data: [22, 5, 14, 23, 6, 7, 13],
          barWidth: '25%',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
        },
        {
          name: '干洗机',
          type: 'bar',
          // 获取动态数据
          data: [10, 5, 9, 26, 20, 7, 6],
          barWidth: '25%',
          label: {
            normal: {
              show: true,
              position: 'top',
            },
          },
        },
      ],
    }
    this.state = {
      option,
      pastday: pastday,
    }
  }

  state = {
    endValue: null,
    startValue: null,
  }

  // 开始时间限制
  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue
    if (endValue) {
      const minValue = endValue.valueOf() - 1000 * 60 * 60 * 24 * parseInt(6)
      const eValue = endValue.valueOf() + 1000 * 60 * 60 * 24 * parseInt(1)
      // 限制可选范围在当天之前，在结束时间前一星期内
      return (startValue >= eValue || startValue < minValue || startValue > moment().endOf('day'))
    }
    else {
      return startValue > moment().endOf('day')
    }
  }

  // 结束时间限制
  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue
    if (startValue) {
      const maxValue = startValue.valueOf() + 1000 * 60 * 60 * 24 * parseInt(7)
      // 限制可选范围在当天之前，在开始时间后一星期内
      return (endValue <= startValue || endValue > maxValue)
    }
    else {
      return endValue > moment().endOf('day')
    }
  }

  // 时间选择框数据联动
  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  // 开始时间选择框回调数据联动
  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  // 结束时间选择框回调数据联动
  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  render() {
    const { startValue, endValue } = this.state;

    return (
      <Card bordered={false}
        bodyStyle={{ padding: '24px 35px' }}
        extra={
          <div>
            <DatePicker
              defaultValue={moment(pastday[0], dateFormat)}
              disabledDate={this.disabledStartDate}
              value={startValue}
              placeholder="开始时间"
              onChange={this.onStartChange}
              format={dateFormat}
            /> ~
            <DatePicker
              defaultValue={moment(today, dateFormat)}
              disabledDate={this.disabledEndDate}
              value={endValue}
              placeholder="结束时间"
              onChange={this.onEndChange}
              format={dateFormat}
            />
          </div>
        }
        title="设备租赁高峰段"
      >
        <ReactEcharts
          option={this.state.option}
          style={{ height: '400px', width: '100%' }}
        />
      </Card>
    )
  }
}

RentalPeak.propTypes = {
  rentalPeakSeriesDate: PropTypes.array
}

export default connect(({ dashboard }) => ({ dashboard }))(RentalPeak)