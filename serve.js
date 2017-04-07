const URL = 'https://github.com/orgs/hypothesis/projects/11';

module.exports = (req, res) => {
    res.writeHead(301, { 'Location': URL });
    res.end();
};
