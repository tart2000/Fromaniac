import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"994386fb-ecee-4138-a850-2fedd009c18b","homePageId":"30d3d7d3-631c-41ac-b86c-2193a8b462ca","authPluginId":null,"baseTag":{},"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{"backgroundColor":"#F8EFE9"},"workflows":[],"pages":[{"id":"5706a0ed-79af-446e-8d5a-fec46719bee8","linkId":"5706a0ed-79af-446e-8d5a-fec46719bee8","name":"Chat","folder":null,"paths":{"en":"chat","default":"chat"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"b1de98cf-2dba-4857-9754-06cdd0a084c1","sectionTitle":"Content","linkId":"f47ad218-5a26-4fcc-ae87-15ea8404d69b"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c13e9d67-1828-4831-ada1-c0d4ce1923e8","linkId":"c13e9d67-1828-4831-ada1-c0d4ce1923e8","name":"Steps","folder":null,"paths":{"en":"steps","default":"steps"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"6c1e30f4-e56c-46c7-918d-6a4716ce5ef9","sectionTitle":"Content","linkId":"fa48bb4a-dfe7-43b1-b276-24d2707eda44"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3c8a4166-7a26-43d0-9c64-ed2b4dc3d2fe","linkId":"3c8a4166-7a26-43d0-9c64-ed2b4dc3d2fe","name":"Pop-up","folder":null,"paths":{"en":"combobox","default":"combobox"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"e6708be1-f1f2-4cee-9314-9446183f9fc3","sectionTitle":"Content","linkId":"3afde260-aa4b-4dc8-90a3-5089e3b13901"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ebba35a0-dbe3-4899-9214-8b39ed8d0d0d","linkId":"ebba35a0-dbe3-4899-9214-8b39ed8d0d0d","name":"Form Builder","folder":null,"paths":{"en":"form-builder","default":"form-builder"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"ab208943-350a-41bc-8c57-6cb907c892e0","sectionTitle":"Content","linkId":"da6fb060-f853-4b09-aca1-0ad6c0304c2e"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"890865eb-5e82-4551-896e-3f56c3c2ef0e","linkId":"890865eb-5e82-4551-896e-3f56c3c2ef0e","name":"Typography","folder":"Styles/","paths":{"en":"typography","default":"typography"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"f4f39acb-c08e-43e2-b61c-fd8ab46b2124","sectionTitle":"Content","linkId":"55f7110c-5ade-411e-bab8-e95bce4eea71"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d9e885b9-f9b7-4011-a3f7-c5a8b3707666","linkId":"d9e885b9-f9b7-4011-a3f7-c5a8b3707666","name":"Accordion","folder":null,"paths":{"en":"accordion","default":"accordion"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"58460a4d-80e8-42ac-b1d6-e27e2adc9a98","sectionTitle":"Content","linkId":"e44b7eab-9290-41cb-8fd8-4b660a4bb547"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"6dac6f65-e315-44e2-b633-a41512a9a4a2","linkId":"6dac6f65-e315-44e2-b633-a41512a9a4a2","name":"Colors","folder":"Styles/","paths":{"en":"colors","default":"colors"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"6e01ca90-2f32-4598-a815-631809afab3f","sectionTitle":"Content","linkId":"73674561-b651-4c52-a936-237b8f547621"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9d4fd2ad-d275-46bd-b9cf-48130fd33305","linkId":"9d4fd2ad-d275-46bd-b9cf-48130fd33305","name":"Avatar","folder":null,"paths":{"en":"avatar","default":"avatar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"dbb869cc-a181-4b0d-aa19-9371a7192001","sectionTitle":"Content","linkId":"5bf8a1b7-95c2-4008-b612-2752fdee5b22"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a08f97f2-6d8c-4161-845e-af2613192c82","linkId":"a08f97f2-6d8c-4161-845e-af2613192c82","name":"Tabs","folder":null,"paths":{"en":"tabs","default":"tabs"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"772e0083-86c9-4379-87ea-67f86f6a7c0c","sectionTitle":"Content","linkId":"a0f85dea-32db-44ee-8825-430ed93e7ea5"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"80c06431-e533-4451-9a35-02ed4bc4fe01","linkId":"80c06431-e533-4451-9a35-02ed4bc4fe01","name":"Card","folder":null,"paths":{"en":"card","default":"card"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"e184cf67-357a-47b8-831c-fd2243a9a583","sectionTitle":"Content","linkId":"03af46e0-7cf0-4f17-8bf5-6388ce158f10"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"f624de94-3d85-4217-a9c2-3e255f8035e7","linkId":"f624de94-3d85-4217-a9c2-3e255f8035e7","name":"Badge","folder":null,"paths":{"en":"badge","default":"badge"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"6ec6f45e-b4bf-4dda-8a2e-fe25bb4632b2","sectionTitle":"Content","linkId":"de326c83-a391-418c-9a15-5d58d8ad9301"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"45013133-a8cb-4688-a7f0-e6e386832dc6","linkId":"45013133-a8cb-4688-a7f0-e6e386832dc6","name":"Counter","folder":null,"paths":{"en":"up-down-voting","default":"up-down-voting"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"0fa1df3e-ea25-4d08-91bd-49fd06d8967c","sectionTitle":"Content","linkId":"fd53450e-219b-474b-87a0-f5442f6b9898"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"948512b9-bda9-4746-962a-21089b1bf0f6","linkId":"948512b9-bda9-4746-962a-21089b1bf0f6","name":"Form Input","folder":null,"paths":{"en":"form-input","default":"form-input"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"b223d52e-db32-4f43-bcfc-3907ad8b9daf","sectionTitle":"Content","linkId":"5b395aba-9e78-44ba-9edc-edb8cc79fba1"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"9602bf73-5c0a-46ac-95e0-2b60ae08b9b3","linkId":"9602bf73-5c0a-46ac-95e0-2b60ae08b9b3","name":"Radio Group","folder":null,"paths":{"en":"radio-group","default":"radio-group"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"eae276cb-7f63-426d-8c53-0e12b579f05b","sectionTitle":"Content","linkId":"9957bedd-f145-43de-b033-84270eaadce2"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4816022b-de74-43a8-b3f8-aa5889f4a936","linkId":"4816022b-de74-43a8-b3f8-aa5889f4a936","name":"Dropdown Menu","folder":null,"paths":{"en":"dropdown-menu","default":"dropdown-menu"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"7678074a-23bf-4b0f-b8d3-2e4e74184e33","sectionTitle":"Content","linkId":"e6d6df3c-8958-493d-9c88-08451f019672"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"041fb004-dc94-4f9b-b261-f8b26d4017c4","linkId":"041fb004-dc94-4f9b-b261-f8b26d4017c4","name":"Button","folder":null,"paths":{"en":"button","default":"button"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"fcb117ed-2867-475e-9a2e-7dc36327641c","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"3f58d64b-ae4b-4086-8d24-faffb405d1d8","sectionTitle":"Content","linkId":"6e654555-f221-49bc-a42e-9bd9adc90731"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"30d3d7d3-631c-41ac-b86c-2193a8b462ca","linkId":"30d3d7d3-631c-41ac-b86c-2193a8b462ca","name":"Fromaniac","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"96396077-aa47-4c06-8004-a3bd4e33ea9d","sectionTitle":"wood","linkId":"959315dd-6a25-484c-bf5a-91fe4bbeaf54"},{"uid":"325c04e5-efb3-4686-a744-bfd4bb54d9ed","sectionTitle":"Section","linkId":"a0a889aa-b02f-4186-a44f-3fd12c2be776"},{"uid":"0c79854f-9d18-42b9-b6f0-e048580381ac","sectionTitle":"Content le jeu","linkId":"8411b29a-075e-4bbc-a84c-1f6547425c8e"},{"uid":"40dbbbc4-88b3-4e32-b080-533f486f2e97","sectionTitle":"Section Fromages","linkId":"84dc5623-1ed2-4f69-b2e6-1f6e34e034c3"},{"uid":"d98f97d0-9f74-4d2c-89ef-e8fed3ed24ab","sectionTitle":"Content how to play","linkId":"99d8f30b-98b4-4294-8eb4-4a8ba774b46d"},{"uid":"3658f4f5-e930-4cee-90d8-a94fc607fb55","sectionTitle":"Section invités","linkId":"d024628d-d956-4270-9f15-c84fcb0d1d39"},{"uid":"01a17b41-4519-4bc9-b048-8fba940fb48e","sectionTitle":"Section","linkId":"ccec8b9d-ba6b-418b-9870-69e5ed001862"},{"uid":"c54895dc-4d2a-476d-af88-ca9944049144","sectionTitle":"Section","linkId":"a75c6238-9033-4c77-b452-6061609f73ab"},{"uid":"3bf1f961-c972-4bc9-bd67-8181bc8083b4","sectionTitle":"wood bottom","linkId":"accc8b79-4664-428f-8231-c8673c31936c"}],"pageUserGroups":[],"title":{"en":"Fromaniac | Le jeu de plateau ultime 😉","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{"en":"Composez le plateau de fromages ultime et séduisez les invités les plus exigeants."},"keywords":{"en":"jeu, plateau, stratégie, game, board game"},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":"images/logo_Fromaniac@2x.png?_wwcv=19"}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 19;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
