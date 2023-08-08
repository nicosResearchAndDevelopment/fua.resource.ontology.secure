const
    util     = require('../util.js'),
    prefix   = 'cert',
    ontology = 'http://www.w3.org/ns/auth/cert#',
    override = false;

Promise.all([
    util.downloadOntology(ontology, 'application/rdf+xml', `data/${prefix}/${prefix}.xml`, override)
]).then(util.logDone).catch(util.logError);
