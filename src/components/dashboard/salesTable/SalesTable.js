import React from 'react'
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import './salestable.css'

import { columns, data } from './SalesData';



const tableData = {
  columns,
  data,
};

const SalesTable = () => {
  return (
    <div className='card sales-info mt-25'>
      <div className="card__header">
        <div className="card__title">
          Product Sales
        </div>
      </div>
      <div className="card__body">
        <DataTableExtensions
          {...tableData}
        >
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            striped={true}
            center={true}
            persistTableHead
            pagination
            highlightOnHover
          />
        </DataTableExtensions>

      </div>
    </div>
  )
}

export default SalesTable