exports.version = (req, res) => {
    const version = 12;
    //we must send a string back
    res.send(`${version}`);
};
