import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { connect } from 'dva'
import { Row, Col, Card, DatePicker, Tabs } from 'antd'
import { Page } from 'components'
import { RentalPeak, RentIncome, Scoring, WashUsageRate, DryUsageRate } from './components'
import styles from './index.less'

const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'
const { TabPane } = Tabs

function Dashboard({ loading }) {
  const date = new Date()
  const today = date.toLocaleDateString()
  const pastday = today.split("/")[0] + today.split("/")[1] + (today.split("/")[2] - 7)
  
  return (
    <Page loading={loading.models.dashboard} className={styles.dashboard}>
      <Row gutter={24}>
        <Col lg={24} md={24}>
          <RentalPeak />
        </Col>

        <Col lg={24} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 35px',
            }}
            extra={<RangePicker
              style={{ width: 286 }}
              defaultValue={[
                moment(today, dateFormat),
                moment(pastday, dateFormat),
              ]}
              format={dateFormat}
            />}
            title="程序使用频率"
          >
            <Tabs>
              <TabPane tab="洗衣程序" key="wash">
                <Row>
                  <Col>
                    <WashUsageRate />
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="烘干程序" key="dry">
                <Row>
                  <Col>
                    <DryUsageRate />
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Card>
        </Col>

        <Col lg={24} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 35px',
            }}
            extra={<RangePicker
              style={{ width: 286 }}
              defaultValue={[
                moment(today, dateFormat),
                moment(pastday, dateFormat),
              ]}
              format={dateFormat}
            />}
            title="设备租赁总收入"
          >
            <RentIncome />
          </Card>
        </Col>

        <Col lg={24} md={24}>
          <Card bordered={false}
            bodyStyle={{
              padding: '24px 35px',
            }}
            extra={<RangePicker
              style={{ width: 286 }}
              defaultValue={[
                moment(today, dateFormat),
                moment(pastday, dateFormat),
              ]}
              format={dateFormat}
            />}
            title="用户使用打分统计"
          >
            <Scoring />
          </Card>
        </Col>
      </Row>
    </Page>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
