const
    util     = require('../util.js'),
    prefix   = 'cert',
    context  = {
        'rdf':  'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
        'dc':   'http://purl.org/dc/terms/',
        'foaf': 'http://xmlns.com/foaf/0.1/',
        'skos': 'http://www.w3.org/2004/02/skos/core#',
        'vs':   'http://www.w3.org/2003/06/sw-vocab-status/ns#',
        'owl':  'http://www.w3.org/2002/07/owl#',
        'rdfs': 'http://www.w3.org/2000/01/rdf-schema#'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.xml`, 'application/rdf+xml', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
