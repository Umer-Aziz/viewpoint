import React ,{ useEffect , useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ApiContext from "../../context/ApiContext"

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { GetAllBlogs , GetAllPendingBlogs , GetSubscriber , Allblogs , pending , blogSubscriber} = useContext(ApiContext);
  useEffect(()=>{
    GetAllBlogs();
    GetAllPendingBlogs();
    GetSubscriber();
},[]);

let Bloglength , pendinglength , Subscriberlength;
if(Allblogs.length && pending.length && blogSubscriber.subs.length ){
     Bloglength = Allblogs.length;
     pendinglength = pending.length;
     Subscriberlength = blogSubscriber.subs.length;
}

const data = {
  labels: ['Total Blogs', 'Pending Blogs', 'Blogs Subscriber'],
  datasets: [
    {
      label: 'No of Blogs',
      data: [Bloglength,pendinglength,Subscriberlength],
      backgroundColor: [
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 159, 64, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return <Pie data={data} />;
}

export default PieChart;
