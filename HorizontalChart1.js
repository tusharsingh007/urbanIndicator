import {useEffect, useState} from 'react';
import 'chart.js/auto';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'x',
    elements: {
      Line: {
        borderWidth: 2,
        pointBackgroundColor: "#fff",
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Coverage Plot',
      },
    },
  };


  const Horizontalchart1 =() => {
    const [data, setData] = useState({
        labels:['(2019,1)','(2019,4)', '(2019,7)', '(2019,10)', '(2020,1)', '(2020,4)', '(2020,7)', '(2020,10)', '(2021,1)', '(2021,4)', '(2021,7)', '(2021,10)'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Dataset 3',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(199, 162, 235, 0.5)',
          },
          {
            label: 'Dataset 4',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(120, 162, 235, 0.5)',
          },
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
          //  const url = 'https://wgxbdbu1hi.execute-api.us-east-1.amazonaws.com/prod/products'
           const url = 'https://f4lm346i22.execute-api.ap-south-1.amazonaws.com/urban/%7Bproxy+%7D'
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
           const dataSet3= [];
           const dataSet4= [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of Object.values(res)) {
                dataSet1.push(val.vegetationCoverage);
                dataSet2.push(val.densevegetationCoverage);
                dataSet3.push(val.waterCoverage);
                dataSet4.push(val.BuiltupArea);
                labelSet.push(val.DATE)
            }
            setData({
                labels:labelSet,
                datasets: [
                  {
                    label: 'vegetationCoverage',
                    data:dataSet1,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(99, 132, 0.5)',
                  },
                  {
                    label: 'densevegetationCoverage',
                    data:dataSet2,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                  },
                  {
                    label: 'waterCoverage',
                    data:dataSet3,
                    borderColor: 'rgb(199, 99, 132)',
                    backgroundColor: 'rgba(199, 132, 0.5)',
                  },
                  {
                    label: 'BuiltupArea',
                    data:dataSet4,
                    borderColor: 'rgb(120, 99, 132)',
                    backgroundColor: 'rgba(120, 132, 0.5)',
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2, dataSet3, dataSet4)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'80%', height:'50%'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Line data={data} options={options}/>
         </div>)
}
export default Horizontalchart1;
