module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@fua/resource.ontology.secure/odrl',
    'dct:requires':    [{
        'dct:identifier': '../../data/odrl/odrl.ttl',
        'dct:format':     'text/turtle'
    }]
};
