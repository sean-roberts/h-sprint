const URL = 'https://github.com/orgs/hypothesis/projects/15';

module.exports = (req, res) => {
    res.writeHead(302, {
        'Location': URL,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': 0
    });
    res.end();
};
