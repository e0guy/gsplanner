# GS Planner Premium — versão recriada pela referência

Esta versão foi recriada para ficar mais próxima da referência enviada:

- Hero com notebook/dashboard real em HTML/CSS
- Celular e relógio separados, não print colado
- Menu com as mesmas seções da referência
- Faixa de marcas
- Seção de funcionalidades em linha
- Depoimentos com cards premium
- Planos no mesmo padrão visual
- Newsletter com bloco roxo e mockup mobile
- Footer estruturado

## Como rodar

```bash
npm install
npm run dev
```

Abra:

```bash
http://localhost:5173/
```

## Build final

```bash
npm run build
```


## Ajuste compacto

- Hero menor e mais proporcional
- Mockups reduzidos
- Cards e seções com paddings menores
- Tipografia com escala controlada
- Containers limitados para não estourar em telas grandes


## Ajustes desta versão

- Removidos do menu: Para Empresas, Blog e Contato.
- Logo GS Planner no topo agora leva para: https://gsyntra.com.br
- Rodapé com link para o site da GSYNTRA.
- Rodapé com Instagram da GSYNTRA: https://www.instagram.com/gsyntra
- Rodapé com e-mail: contato@gsyntra.com.br

Caso o Instagram ou e-mail oficial sejam diferentes, altere no arquivo:

```txt
src/components/Footer.jsx
```
