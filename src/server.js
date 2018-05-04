import App from './containers/App';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Koa from 'koa';
import serve from 'koa-static';
import helmet from 'koa-helmet';
import Router from 'koa-router';
import { renderToString } from 'react-dom/server';
import configureStore from './store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const scripts = Object.keys(assets).reduce((scripts, key) => {
	return (
		scripts + `<script src="${assets[key].js}" defer crossorigin></script>`
	);
}, '');
// Initialize `koa-router` and setup a route listening on `GET /*`
// Logic has been splitted into two chained middleware functions
// @see https://github.com/alexmingoia/koa-router#multiple-middleware
const router = new Router();
router.get(
	'/*',
	(ctx, next) => {
		const context = {};
		const store = configureStore({});
		const markup = renderToString(<Provider store={store}>
			<StaticRouter context={context} location={ctx.url}>
				<App />
			</StaticRouter>
		</Provider>);
		ctx.state.markup = markup;
		return context.url ? ctx.redirect(context.url) : next();
	},
	ctx => {
		ctx.status = 200;
		ctx.body = `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${scripts}
    </head>
    <body>
        <div id="root">${ctx.state.markup}</div>
    </body>
</html>`;
	}
);

// Intialize and configure Koa application
const server = new Koa();
server
// `koa-helmet` provides security headers to help prevent common, well known attacks
// @see https://helmetjs.github.io/
	.use(helmet())
// Serve static files located under `process.env.RAZZLE_PUBLIC_DIR`
	.use(serve(process.env.RAZZLE_PUBLIC_DIR))
	.use(router.routes())
	.use(router.allowedMethods());

export default server;
