function Navtab({ classes, text, pageChangeHandler, pageid }) {
    return (
        <div className={classes} onClick={() => pageChangeHandler(pageid)}>{text}</div>
    );
}

export default Navtab;