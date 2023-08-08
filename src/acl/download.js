const
    util     = require('../util.js'),
    prefix   = 'acl',
    ontology = 'http://www.w3.org/ns/auth/acl#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'text/turtle', `data/${prefix}/${prefix}.ttl`, override),
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override),
    util.downloadOntology(ontology, 'text/n3', `data/${prefix}/${prefix}.n3`, override)
]).then(util.logDone).catch(util.logError);
