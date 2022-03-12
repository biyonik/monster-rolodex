import './search-box.style.css';

const SearchBox = (props) => {
    const { onChangeHandler, placeHolder, className, id, name, value } = props;
    
    return (
        <>
            <input
                type='search'
                className={`search-box ${className}`}
                id={id}
                name={name}
                value={value}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        </>
    )
}

export default SearchBox;