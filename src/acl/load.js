module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.science/acl',
    'dct:requires':    [{
        'dct:identifier': '../../data/acl/acl_fixed.ttl',
        'dct:format':     'text/turtle'
    }]
};
