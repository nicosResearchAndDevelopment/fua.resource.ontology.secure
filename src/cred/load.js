module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.ontology.secure/cred',
    'dct:requires':    [{
        'dct:identifier': '../../data/cred/cred_fixed.ttl',
        'dct:format':     'text/turtle'
    }] // TODO add sec.ttl when it becomes available
};
