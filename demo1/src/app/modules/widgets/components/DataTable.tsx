import 'smart-webcomponents-react/source/styles/smart.default.css';
import React, { useEffect, useState } from 'react';
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface FormType {
  formName: string;
  formDescription: string;
  id: string;
  formData: string;
}

const DataTable: React.FC = () => {
  const [data, setData] = useState<FormType[]>([]);
  const [selectedFormId, setSelectedFormId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<FormType[]>('http://localhost:9000/api/forms');
      const dataWithConvertedFormData = response.data.map(form => ({
        ...form,
        formData: JSON.stringify(form.formData)
      }));
      setData(dataWithConvertedFormData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRowSelection = (selectedForm: FormType) => {
    if (selectedForm && selectedForm.formData) {
      setSelectedFormId(selectedForm.id);
      navigate(`/dashboard/`);
      localStorage.setItem('selectedForm', JSON.stringify(selectedForm)); // This already includes formData
      console.log(selectedForm.formData);
    } else {
      console.error('Selected form is undefined');
    }
  };
  

  const dataSource = new Smart.DataAdapter({
    dataSource: data,
    dataFields: [
      { name: 'formName', type: 'string' },
      { name: 'formDescription', type: 'string' },
      { name: 'id', type: 'string' },
      { name: 'formData', type: 'JSON.stringify()' },
    ],
  });

  const columns = [
    {
      label: 'Form Name',
      dataField: 'formName',
    },
    {
      label: 'Form Description',
      dataField: 'formDescription',
    },
    {
      label: 'Form ID',
      dataField: 'id',
    },
    {
      label: 'Form Data',
      dataField: 'formData',
    },
  ];

  const gridProps = {
    appearance: {
      alternationCount: 2,
      showRowHeader: true,
      showRowHeaderSelectIcon: true,
      showRowHeaderFocusIcon: true,
    },
    behavior: {
      columnResizeMode: 'growAndShrink',
    },
    selection: {
      enabled: true,
      allowCellSelection: true,
      allowRowHeaderSelection: true,
      allowColumnHeaderSelection: true,
      mode: 'extended',
    },
    paging: {
      enabled: true,
    },
    pager: {
      visible: true,
    },
    sorting: {
      enabled: true,
    },
    editing: {
      enabled: true,
    },
    onRowClick: (event: any) => {
      const clickedRow = event.detail.row;
      if (clickedRow) {
        handleRowSelection(clickedRow.data);
      }
    },    
  };

  return (
    <div>
      <div>
        The Grid in this demo displays data in a series of rows and columns. This
        is the simplest case when the Grid is bound to a local data source.
      </div>
      <Grid dataSource={dataSource} columns={columns} {...gridProps}></Grid>
    </div>
  );
}

export default DataTable;
