import './ButtonDelete.scss';
import DeleteIcon from '@mui/icons-material/Delete';

export const ButtonDelete = ({delet, id}) => {
    return (
        <button className='IconDelete' onClick={()=>delet(id)}>
            <DeleteIcon className='delete' />
        </button>
    )
}