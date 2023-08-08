const
    util     = require('../util.js'),
    prefix   = 'vc',
    context  = {
        'cred': 'https://www.w3.org/2018/credentials#',
        'sec':  'https://w3id.org/security#',
        'xsd':  'http://www.w3.org/2001/XMLSchema#'
    },
    override = false;

Promise.all([
    util.convertOntology(`data/${prefix}/${prefix}.json`, 'application/ld+json', `data/${prefix}/${prefix}_generated.ttl`, 'text/turtle', context, override)
]).then(util.logDone).catch(util.logError);
