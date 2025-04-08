export const childrenCommon = [
    {
        title: 'home',
        icon: 'precision_manufacturing',
        path: '/',
        component: () => import('pages/MDGlob.vue'),
    },
    {
        title: 'Test Abbreviations Plugin',
        icon: 'brush',
        path: '/test-abbr-plugin',
        component: () => import('pages/TestAbbrPlugin.vue'),
    },
    {
        title: 'Test Abbreviations Style',
        icon: 'brush',
        path: 'test-abbr-style',
        component: () => import('pages/TestAbbrStyle.vue'),
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
