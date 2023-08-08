module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.secure/cert',
    'dct:requires':    [{
        'dct:identifier': '../../data/cert/cert.xml',
        'dct:format':     'application/rdf+xml'
    }]
};
