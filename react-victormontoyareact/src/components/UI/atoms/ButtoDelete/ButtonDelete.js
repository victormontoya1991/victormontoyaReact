import './ButtonDelete.scss';

export const ButtonDelete = ({delet, id}) => {
    return (
        <button className='IconDelete' onClick={()=>delet(id)}>
            <span className="material-icons md-50 delete">delete</span>
        </button>
    )
}