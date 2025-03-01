export const childrenCommon = [
    {
        title: 'Test Global Components',
        icon: 'brush',
        path: '/',
        component: () => import('pages/TestAbbrPlugin.vue'),
    },
    {
        title: 'Test Abbreviations',
        icon: 'brush',
        path: 'test-abbr',
        component: () => import('pages/TestAbbr.vue'),
    },
    {
        title: 'home',
        icon: 'precision_manufacturing',
        path: 'md-glob',
        component: () => import('pages/MDGlob.vue'),
    },
    {
        title: 'MD-Simple',
        icon: 'brush',
        path: 'md-simple',
        component: () => import('pages/MDSimple.vue'),
    },
    {
        title: 'MD-PluginTest',
        icon: 'brush',
        path: 'md-plugintest',
        component: () => import('pages/MDPluginTest.vue'),
    },
    {
        title: 'Test Global Components',
        icon: 'brush',
        path: 'test-components',
        component: () => import('pages/TestGlobalComponents.vue'),
    },
]

const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            // { path: '', component: () => import('pages/Index.vue') },
            // { path: 'about', component: () => import('pages/About.vue') }
            ...childrenCommon,
            // ...childrenDebug,
            // ...childrenWizard,
            // ...childrenDev
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
]

export default routes
