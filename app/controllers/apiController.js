exports.version = (req, res) => {
    const resObj = {
        version: 3
    };
    //we must send a string back
    res.json(resObj);
};
