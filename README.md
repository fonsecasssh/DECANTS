# Decant Lab — Render Ready

Projeto preparado para deploy como Static Site no Render.

## Estrutura
- `public/index.html` — site
- `render.yaml` — Blueprint do Render

## Deploy
1. Crie um repositório no GitHub.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. No Render, use New > Blueprint e conecte o repositório.
4. O Render detectará `render.yaml`.
5. Confirme a criação do serviço `decant-lab`.

Alternativa manual:
- New > Static Site
- Publish Directory: `public`
- Build Command: `echo "Decant Lab - static site"`

IMPORTANTE:
A versão atual ainda contém algumas fotos de produtos referenciadas por URLs externas.
Para produção definitiva, substitua essas URLs por arquivos próprios/licenciados dentro de `public/images`.
