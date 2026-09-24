import { execSync } from 'child_process';
import { copyFileSync, writeFileSync, rmSync, existsSync, cpSync } from 'fs';
import { join } from 'path';

console.log('📦 Executando build de produção...');
execSync('npm run build', { stdio: 'inherit' });

const target = '/tmp/gh_pages_bloopu';
if (existsSync(target)) {
  rmSync(target, { recursive: true, force: true });
}

console.log('📂 Preparando arquivos de release com CNAME e .nojekyll...');
cpSync('dist/guincho/browser', target, { recursive: true });
writeFileSync(join(target, 'CNAME'), 'bloopu.com\n');
writeFileSync(join(target, '.nojekyll'), '');
copyFileSync(join(target, 'index.html'), join(target, '404.html'));

console.log('🚀 Enviando para a branch gh-pages no GitHub...');
const opts = { cwd: target, stdio: 'inherit' };
execSync('git init', opts);
execSync('git checkout -b gh-pages', opts);
execSync('git add -A', opts);
execSync('git commit -m "build(release): publish Bloopu Guincho to gh-pages with CNAME bloopu.com"', opts);
const token = process.env.BLACK_GITHUB_PAT_TOKEN;
if (!token) {
  console.error('❌ Erro: variável de ambiente BLACK_GITHUB_PAT_TOKEN não encontrada.');
  process.exit(1);
}
const remoteUrl = `https://x-access-token:${token}@github.com/seucubensis/guincho.git`;

execSync(`git remote add origin "${remoteUrl}"`, opts);
execSync('git push origin gh-pages --force', opts);

console.log('✅ Deploy concluído com sucesso para bloopu.com na branch gh-pages!');
