import React, {useState} from 'react'
import './recentorder.css'
import Chart from 'react-apexcharts'


const RecentOrder = () => {
    const [options,setOptions] = useState({
      chart: {
      height: 305,
      type: 'radialBar',
      responsive:'true',
      offsetX: 0,
      offsetY: 10,
    },
    plotOptions: {
        radialBar: {
      startAngle: -135,
      endAngle: 135,
      size: 120,
      imageWidth: 50,
          imageHeight: 50,
      track: {	
        strokeWidth: "80%",	
      },
      dropShadow: {
        enabled: false,
        top: 0,
        left: 0,
        bottom: 0,
        blur: 3,
        opacity: 0.5
      },
      dataLabels: {
        name: {
        fontSize: '16px',
        color: undefined,
        offsetY: 30,
        },
        hollow: {	
         size: "60%"	
        },
        value: {
        offsetY: -10,
        fontSize: '22px',
        color: undefined,
        formatter: function (val) {
          return val + "%";
        }
        }
      }
      }
    },
    colors: ['#ff5d9e'],
    fill: {
      type: "gradient",
      gradient: {
        shade: "gradient",
        type: "horizontal",
        shadeIntensity: .5,
        gradientToColors: ["#675dcd"],
        inverseColors: !0,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      dashArray: 4
    },
      labels: [""]
    })
  
        const [series, setSeries] = useState([83])
  return (
    <div className='card transaction__orders'>
      <div className="card__header">
      <h3 className='card__title'> Recent Orders</h3>
      </div>
      <div className="card__body pt-0">
      <Chart options={options} series={series} type="radialBar" height={305} />
      <div className='transaction__info d-flex'>
      <div className='transaction__delivered'>
      <p><span className="legend bg-primary"></span>Delivered</p>
      <h3>5238</h3>
      <p className='text-muted'>Last 6 months</p>
      </div>
      <div className='transaction__cancelled'>
      <p><span className="legend bg-primary"></span>Delivered</p>
      <h3>5238</h3>
      <p className='text-muted'>Last 6 months</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default RecentOrder