function Authbtn({ classes, type, text, id, pageChangeHandler, pageid }) {
    return (
        <button className={classes} id={id}  onClick={() => pageChangeHandler(pageid)}>{text}</button>
    );
}

export default Authbtn;