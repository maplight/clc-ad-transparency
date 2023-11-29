export default {
    'type': 'admin', // other type available: content-api.
    routes: [
        {
        method: 'GET',
        path: '/',
        handler: 'instructionsController.getInstructions',
        config: {
            policies: [],
            auth: false,
        },
        },
        {
        method: 'GET',
        path: '/settings',
        handler: 'instructionsController.getSettings',
        config: {
            policies: [],
            auth: false,
        },
        },
        {
        method: 'POST',
        path: '/settings',
        handler: 'instructionsController.setSettings',
        config: {
            policies: [],
            auth: false,
        },
        },
    ]

};
  