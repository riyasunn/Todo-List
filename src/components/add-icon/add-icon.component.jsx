import { ReactComponent as PlusIcon } from'../../assets/plus-icon.svg';
// import { useDispatch } from 'react-redux';

const AddIcon = (props) => {
    const {className} = props;
    // const dispatch = useDispatch();

    return(
        <div>
            <PlusIcon className={className} />
        </div>
    )
}

export default AddIcon;