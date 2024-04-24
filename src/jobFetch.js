import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://jsearch.p.rapidapi.com/search',
  params: {
    query: 'Python developer in Texas, USA',
    page: '1',
    num_pages: '1'
  },
  headers: {
    'X-RapidAPI-Key': '7c45edc716mshac64bc2fe4b5921p101283jsncaa4e9dceb94',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  }
};
 const fetchJobs = async()=>{
    try {
        const response = await axios.request(options);
        // console.log(response.data.data);
        return response.data.data
    } catch (error) {
        console.error(error);
    }
 }
 export default fetchJobs
