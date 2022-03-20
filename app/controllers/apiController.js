exports.version = (req, res) => {
    const resObj = {
        version: 2
    };
    //we must send a string back
    res.send(JSON.stringify(resObj));
};
