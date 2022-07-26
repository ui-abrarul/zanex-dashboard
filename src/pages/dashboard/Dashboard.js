import React from 'react'
import Activity from '../../components/dashboard/activity/Activity'
import Browser from '../../components/dashboard/browser/Browser'
import RecentOrder from '../../components/dashboard/recentorder/RecentOrder'
import SalesCard from '../../components/dashboard/salescard/SalesCard'
import SalesTable from '../../components/dashboard/salesTable/SalesTable'
import Timeline from '../../components/dashboard/timeline/Timeline'
import TransactionChart from '../../components/dashboard/transactionChart/TransactionChart'
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
      <SalesCard/>
      <div className='transaction grid  mt-25'>
      <TransactionChart/>
      <RecentOrder/>
      </div>
      <div className='grid grid-3 gap25 mt-25'>
      <Timeline/>
      <Browser/>
      <Activity/>
      </div>
      <SalesTable/>
      </>
  )
}

export default Dashboard