import React from "react";
import './projects.css';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import CheckIcon from '@mui/icons-material/Check';

export default function Projects() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: '50'
        },
        {
            field: 'name',
            headerName: 'Nazwa',
            width: '400'
        },
        {
            field: 'scoutGroupName',
            headerName: 'Drużyna',
            width: '200'
        },
        {
            field: 'status',
            headerName: 'Stan',
            valueOptions: ['Nowy', 'Zwrócony', 'Do weryfikacji', 'Zatwierdzony', 'Rozliczony', 'Odrzucony'],
            cellClassName: (params) =>{
              const mainClass = 'col-status';
              switch(params.value) {
                case 'Nowy':
                  return mainClass + ' status-new';
                case 'Zwrócony':
                  return mainClass + ' status-returned';
                case 'Do weryfikacji':
                  return mainClass + ' status-in-review';
                case 'Zatwierdzony':
                  return mainClass + ' status-approved';
                case 'Rozliczony':
                  return mainClass + ' status-finished';
                case 'Odrzucony':
                  return mainClass + ' status-rejected';
                default:
                  return mainClass;
              }
            },
            width: '150'
        }
    ]

    const rows = [
        {
          id: 1,
          name: "TEST", 
          scoutGroupName: '53 Buki', 
          ScoutGroupLeader: 'Janusz', 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Nowy'
        },
        {
          id: 2,
          name: "TEST 2", 
          scoutGroup: {name: '53 Buki', leader: 'Janusz'}, 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Do weryfikacji'
        },
        {
          id: 3,
          name: "TEST 3", 
          scoutGroup: {name: '53 Buki', leader: 'Janusz'}, 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Zwrócony'
        },
        {
          id: 4,
          name: "TEST 4", 
          scoutGroup: {name: '53 Buki', leader: 'Janusz'}, 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Zatwierdzony'
        },
        {
          id: 5,
          name: "TEST 5", 
          scoutGroup: {name: '53 Buki', leader: 'Janusz'}, 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Rozliczony'
        },
        {
          id: 6,
          name: "TEST 6", 
          scoutGroup: {name: '53 Buki', leader: 'Janusz'}, 
          user: {email: 'test@gmail.com', password: '', permissions: ''},
          date: new Date(2021, 12, 31),
          description: '',
          rohisYear: 2021,
          materials: '',
          goals: '',
          file: '',
          status: 'Odrzucony'
        }
      ];


  const data = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: true,
  });

  data.data.rows.forEach(x => console.log('status: ' + x.status));
  data.data.columns.forEach(x => { 
      if(x.field === 'status') {
        console.log('column: ' + x.headerName);
        console.log('field: ' + x.field);
        console.log('type: ' + x.type);
      }
    });

    return <div id="projects-main" style={{ height: '100%', width: '100%' }}>
        <DataGrid
            //rows={data.data.rows}
            //columns={data.data.columns}
            rows={rows}
            columns={columns}
            pageSize={50}
            rowsPerPageOptions={[50]}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
}