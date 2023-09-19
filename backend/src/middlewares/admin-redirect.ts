export default (config, { strapi })=> {
    const redirects = ['/', '/index.html', '/admin', '/admin/'].map((path: string) => ({
        method: 'GET',
        path,
        handler: (ctx: any) => ctx.redirect('/admin/content-manager'),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};