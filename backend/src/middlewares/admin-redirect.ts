export default (config, { strapi })=> {
    const redirects = ['/', '/index.html', '/admin', '/admin/'].map((path: string) => ({
        method: 'GET',
        path,
        handler: (ctx: any) => ctx.redirect('/admin/plugins/instructions'),
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};
