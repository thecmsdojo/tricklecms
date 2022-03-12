exports.version = (req, res) => {
    const version = 2;
    //we must send a string back
    res.send(`${version}`);
};
