
import { readFileSync } from 'fs';
import gulp from 'gulp';
import Ssh from 'gulp-ssh';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import pkg from './package.json' assert { type: 'json' };

const _dirname =
    // eslint-disable-next-line no-undef
    typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

const remoteUrl = `vtru/slideshow/${pkg.name}`;
const remoteFolder = `/var/www/html/widgets/${remoteUrl}`;

export function publish(cb) {
    // eslint-disable-next-line no-undef
    const privateKey = readFileSync(join(_dirname, '.chave.pem')).toString();
    const config = {
        host: 'servidor17.usign.io',
        port: 2229,
        username: 'root',
        privateKey,
        // eslint-disable-next-line no-undef
        passphrase: process.env.VITE_PASSPHRASE || 'jamaissaberão',
    };
    const gulpSSH = new Ssh({
        ignoreErrors: false,
        sshConfig: config,
    });
    gulp.src('dist/**/*').pipe(gulpSSH.dest(remoteFolder));
    console.log(`URL DEV: https://usign.io/widgets/${remoteUrl}/`);
    console.log(`URL PROD: https://widgets.usign.io/${remoteUrl}/`);
    cb();
}
