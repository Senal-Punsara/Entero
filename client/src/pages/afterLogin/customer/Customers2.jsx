import React from 'react';
import { GridComponent, ColumnsDirective,
ColumnDirective, Page, Selection, Inject, Edit,
Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customers2Data, customersGrid } from '../../../documents/dummy';
import {customers2Data} from '../../../documents/dummy';
import {customersGrid} from '../../../documents/dummy';
import Header from '../../../components/PagesHeader/Header';

const Customers2 = () => {
    return (
        <div className="w-full p-2 pb-48
          bg-slate-100">
          <div className="m-2 md:m-10 p-2 md:p-10 
        bg-white rounded-3xl">
         {/* <div className="m-2 md:m-10 p-2 md:p-10
        bg-white rounded-3xl"></div> */}
          <Header category="Page" title="Customers" />
          <GridComponent
            
            dataSource={customers2Data}
            allowPaging
            allowSorting
            toolbar={['Delete']}
            editSettings={{ allowDeleting: true,
            allowEditing: true }}
            width="auto"
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Toolbar,
            Selection, Edit, Sort, Filter ]} />
          </GridComponent>
          </div>
        </div>
      )
}

export default Customers2