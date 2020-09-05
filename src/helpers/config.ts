import config from '@/config.json';

let id = 'master';
const domainName = window.location.hostname;
if (domainName.includes('localhost:')) id = 'local';
if (domainName === 'gov.letsbuild.finance') id = 'develop';

export default config[id];
