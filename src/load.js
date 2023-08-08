module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.science',
    'dct:requires':    [
        {
            'dct:identifier': './acl/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './cert/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './cred/load.js',
            'dct:format':     'application/fua.load+js'
        },
        {
            'dct:identifier': './odrl/load.js',
            'dct:format':     'application/fua.load+js'
        }
    ]
};
