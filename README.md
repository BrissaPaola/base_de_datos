# ProgExpo Tienda

Sistema de ventas con API REST en Express, base de datos MySQL en Docker y front-end en HTML/CSS/JS.

## Características
- Registro e inicio de sesión
- Roles: Administrador y Cliente
- CRUD de productos y categorías
- Carrito de compra con validación de stock
- Checkout con tarjetas de pago
- Historial de compras
- Front-end con Bootstrap, Bootstrap Icons y colores personalizados

## Ejecutar
1. Copia `.env.example` a `.env` y ajusta si es necesario.
2. Levanta la base de datos:

```bash
docker compose up -d
```

3. Instala dependencias:

```bash
npm install
```

4. Inicia el servidor:

```bash
npm start
```

5. Abre `http://localhost:4000` en el navegador.

## Nota
La base de datos inicializa roles, categorías y algunos productos de ejemplo.
