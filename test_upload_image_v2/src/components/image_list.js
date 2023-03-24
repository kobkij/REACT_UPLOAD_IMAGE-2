import { React,useState, useEffect , useMemo} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import '../components/scss/style.scss';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

let PageSize = 10;

const ImageList = () => {
    const [image, setImage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getImage();
    }, []);
 
    const getImage = async () => {
        const response = await axios.get('http://localhost:5000/image');
        setImage(response.data);
    }

      const currentTableData = useMemo(() => {
        console.log(currentPage);
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return image.slice(firstPageIndex, lastPageIndex);
      }, [currentPage,image]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Link to="/addImage"><button type="button" class="btn btn-primary">ADD IMAGE</button></Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Image Name</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                { currentTableData.map((image, index) => (
                        <tr key={ image.id }>
                            <td>{ index + 1 }</td>
                            <td>{ image.image_name }</td>
                            <td>
                                <Zoom>
                                    <img src={image.url+image.image_name} class="img-thumbnail" height="50" width="50" />
                                </Zoom>
                            </td>
                        </tr>
                    )) }      
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={image.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />

        </div>
    )
}
 
export default ImageList
