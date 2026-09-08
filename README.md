# Decant Lab V6 — E-commerce com pagamento no site

Esta versão deixa de ser um site estático puro e passa a usar um pequeno backend Node/Express.

## O que já está implementado
- catálogo premium;
- carrinho;
- checkout dentro da Decant Lab;
- dados do comprador;
- Mercado Pago Checkout Bricks;
- Pix com QR Code / copia e cola;
- cartão de crédito e débito no próprio site;
- preços validados novamente no servidor (o navegador não define o valor cobrado);
- Access Token somente no servidor;
- endpoint preparado para webhook.

## Antes de vender de verdade
No Mercado Pago Developers, crie/abra uma aplicação e obtenha:
- Public Key
- Access Token

No Render, adicione as variáveis de ambiente:
- MP_PUBLIC_KEY
- MP_ACCESS_TOKEN

Nunca coloque o Access Token no `index.html`, GitHub ou JavaScript público.

## Render
A V6 usa um Web Service Node, não mais Static Site.
O `render.yaml` já contém:
- runtime: node
- npm install
- npm start

Se o Blueprint existente foi criado originalmente como Static Site, o mais seguro é criar um novo Web Service/Blueprint a partir desta versão ou permitir que o Blueprint recrie o recurso conforme a configuração.

## Mercado Pago
O checkout usa a biblioteca MercadoPago.js / Checkout Bricks no frontend e processa a cobrança no backend.

## Webhooks
A rota é:
`/api/webhooks/mercadopago`

Antes de usar webhooks em produção, valide a assinatura das notificações conforme a documentação vigente do Mercado Pago.

## Observação sobre fotos
As fotos do catálogo desta versão ainda usam URLs externas. O checkout é independente delas. Para hospedá-las localmente, os arquivos físicos das imagens precisam estar disponíveis no projeto.
