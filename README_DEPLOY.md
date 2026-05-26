# Deploy GSPlanner na Vercel

Esta versão inclui a pasta `dist/` já gerada e configurada para a Vercel não executar `npm install` nem `npm ci`, evitando o erro `Exit handler never called`.

## Testar localmente

```powershell
npm ci
npm run dev
```

Abra: http://localhost:5173

## Gerar build local quando alterar o projeto

```powershell
npm run build
```

Depois suba também a pasta `dist/` para o GitHub.

## Subir para GitHub

```powershell
git add .
git commit -m "Deploy static final"
git push -f origin main
```

## Configuração da Vercel

- Install Command: `echo Install skipped - using committed dist`
- Build Command: `echo Build skipped - using committed dist`
- Output Directory: `dist`
