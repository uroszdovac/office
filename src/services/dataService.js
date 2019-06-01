import Office from '../entities/Office';
import axios from 'axios';
const URL = 'https://itk-exam-api.herokuapp.com/api/offices';

class DataService{

    getData = () =>{

        return axios.get(URL)
                    .then(response => {
                        const officesData = response.data;
                        return officesData.map(office => {
                            return new Office(office.id, office.name, office.description, office.latitude, office.longitude, office.photo)
                        })
                    })
    }
}

export default new DataService();