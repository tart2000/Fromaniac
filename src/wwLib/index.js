import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"0e60c04c-fdd3-4440-9cdd-ade9bd259c03":"#000000D9","bbe05591-1225-4628-be2c-a31950ecbc7d":"#00000040","1f401d7c-c1ae-4b31-92fb-307267cdb5e0":"#00000073","38857a09-ad21-40d1-aeb2-b4d9c94b85db":"#0000000F","7d8446a1-f9ca-473b-ac6a-10f89be53411":"#000000D9","3feefbb7-adbb-4af0-ab84-514024de4b83":"#00000040","bcbfc202-0bd5-4e30-85c9-7fc80f59bfca":"#FFFFFF","15af2206-6215-461e-bd32-1654163eaff2":"#e1e3e5","e1d2a888-a777-4103-b116-8b760fe34112":"#c2c7ce","eeaf0ce0-7529-4040-a32b-81de7fa917bc":"#a3acb9","af6c898a-99f7-460b-bdc2-25d248a8e2ba":"#8692a1","9d68b562-ab4b-4f3f-ae20-871bdee8ddae":"#6c7888","d83ecd2b-a0d0-4cc5-9fcc-29f1f870d099":"#545f6c","81cbc70b-dd80-4cae-9ba9-aec76080c449":"#3f4750","4f4cac43-66dc-4fb4-b18e-23f9c80705a9":"#2a2f34","2e0df064-26d3-4b7f-af1b-16c74eace1a1":"#151618","9486e4f3-0027-403b-9108-e713a6f6b630":"#e2e2e2","62b58f71-15fd-4028-8063-cda09ef95646":"#c7c7c7","00824f9a-ec43-4820-82e5-ac7f08dd0e4a":"#ababab","86fd9e48-bd05-430f-960c-60ec271af1c8":"#919191","5aa1a5f2-b72f-4898-bbdf-dcb33ab7e796":"#777777","961ee3a6-ad32-4b6b-89e1-e6de09e598bc":"#5e5e5e","958917fd-c721-4385-aaae-b0f4365dfa5c":"#464646","65fdf64f-7e6d-4802-adfa-bda62551ab8e":"#2e2e2e","cf726da6-7131-4b8a-a6f3-5b00dbeca9a1":"#161616","39e17b59-8331-47d8-ab68-bfb977bb23b3":"#f8f8f7","42702f0e-e025-4fcb-a8a9-da3d7d949bbe":"#e5e2de","db8a0ee4-9108-483f-9fba-8bc96c397747":"#cdc5bc","823ae3f9-ebb4-4620-82c2-7ec0c1dd8223":"#b5aa9c","77c37296-c731-4429-8245-699e829f0e32":"#9b8f7f","0555e682-b4d0-4b1a-9179-3aa25b0e8d65":"#817566","ef23a121-c8c2-4da3-b461-4148db3f9da2":"#675c50","4f309286-878f-4779-9570-fa1cefea1bb0":"#4c443b","559eaa77-28f3-4476-92e7-8c37ea44b21d":"#322d27","8d9fdfca-7a03-4e2f-bae4-1a4c7bcd38f9":"#181613","7c85463e-ee8e-4d31-9390-f1d29c5b9aed":"#d1e4ff","4fcde6e3-2390-4e5e-a4cb-8c9d7fff28f1":"#a2caff","68e5dc28-e79c-417f-8697-b6589c9a954a":"#6faeff","0f21bc57-7e53-4812-a467-2bf38d972d58":"#3090ff","046cf9b9-f83d-4984-a373-c8dc35faa442":"#0075df","f87c7a12-1906-4e0f-ad45-9bc324a389cf":"#005db1","1e572bb2-2dd9-4228-bf5d-05f188c7933b":"#004585","2351afcd-e4d6-44dd-99ae-3f9921f5dee6":"#002e5b","77bda45c-2661-4107-8068-8020f50b418e":"#001631","36e5665a-8c18-42f9-901d-1833bc96c974":"#f5ddcf","f92f7a6f-a46c-42b6-8fb6-3aef1ac87749":"#f6b791","7580798e-a169-4ad0-8564-a1b9459d1040":"#f68c47","8d752246-5977-4076-9fd9-dc8c0cd307f8":"#de6c0b","058920a8-0b6c-4406-bafd-a95526f941f9":"#b95700","990b5e64-f116-4d20-b77b-81761d1ef89f":"#944403","010ebf63-d3ba-4d24-88bd-75f93b7d9add":"#6f3207","166afc6d-7c9d-4529-bf00-7a93b50f22b3":"#49220a","205aadd5-3728-458c-9c0b-fd9928360d83":"#231107","d4733bf4-7924-4487-81b3-7f1719501293":"#faf8ed","9de484d1-97cd-4fbe-8207-472d07009a38":"#f1e3a9","f5166278-bc70-4b66-b2e9-82cb426919ac":"#c8aa19","5a05d1c9-29ec-4527-a904-051d4d67e3cc":"#8d7500","997adaa2-6040-44c6-8ed2-f568ae218fc0":"#544406","516bb514-4e59-477c-b91c-db25b12f9465":"#382d07","85405a0d-309b-4591-997b-aecde6412907":"#f4faf3","5cb5052e-36b8-40f4-83fa-16d31c913c82":"#c6f0c5","ffb8c04c-3a6e-4e3f-93f1-596934b36a7a":"#53c954","df5ed48c-4b94-4666-95a2-c8409e666921":"#2aad2c","b2584fa2-c02a-46b9-a03b-6a0f653f4c11":"#1e7118","8331ab55-84a2-4cfa-bd41-a7e5bb2a8445":"#1a3616","67775b4a-8c94-4d0e-b505-3cebed5241e2":"#faf7f7","5c034e70-ebf8-4fab-8e88-1264d83f8550":"#f6efee","5623bd50-bd52-44c3-a2d8-3e803c5badd9":"#f3b5b0","32fb7a7e-ec45-4247-9bef-fea2ddf1e82b":"#fa444d","4aa1cb40-3efb-404f-96eb-b3d6f827f17b":"#af1129","06808d37-bc30-4716-a301-cd3c4c7a4ae2":"#4f1a1c","7417abd5-7a6d-4b44-aeaa-c81030692668":"#e3c645","2e30ec10-aadd-4864-ab99-06c92c4de8eb":"#ab8f05","c534e459-ee1b-431d-89fa-62adba603d81":"#705c03","8c344a90-0323-4df1-a92e-ae020cb9789a":"#1c1604","cffcc850-9417-4cee-9e0b-186df699ab1b":"#e6f6e6","1f2b3551-9bb3-4cd0-87ee-94db9e6bef4a":"#7ee27f","0234a65e-76cc-4d3a-bcb4-ce36b2a97f5c":"#009100","2f38107b-9bf8-45e7-b543-481e295563ff":"#23521d","9a870e04-f6c2-4ba9-8bde-7db7e4a5991a":"#0d1a0a","ad9cd0e9-255c-4acd-b958-c6d7b2f38cc7":"#f2dddb","60e6bfd1-e5f8-4fee-82b8-a540505f466e":"#f78580","5eed13dc-4cdb-44e6-abd3-822344e120c2":"#de0030","e0ef6795-6ae5-4c63-a79c-904ed9ffcf89":"#7e1a23","c12b3ef4-6148-484c-9c6c-88860a369acf":"#241010","3aa2b70c-9852-4a1d-8011-c6679b292be6":"#f7f1d9","bdc1a369-a0ae-4d83-9271-2537ecfbd831":"#f2f0ef","28cf1a9f-6b1a-460c-974f-c5ad8be2ef25":"#f8f8f8","3f74e229-2ca2-48d2-8d7c-913411a6c8d2":"#f0f1f1","f0517390-3e12-4529-bc9b-ff526c7d26d1":"#fbf7f4","eae7418e-3002-4f99-a59b-eb4ffd388dfc":"#f8efe9","1bbbb28c-401b-44be-baba-a8ff404d8196":"#f8f8f8","3a3bc55b-2884-43da-bd51-c4b18b1ef21f":"#f1f1f1","93c36389-35de-4a29-bbc2-417134e14f30":"#f4f8ff","c77dd3cf-5216-4b8b-8e72-7c4e0722cc1e":"#e8f2ff"} : {"0e60c04c-fdd3-4440-9cdd-ade9bd259c03":"#000000D9","bbe05591-1225-4628-be2c-a31950ecbc7d":"#00000040","1f401d7c-c1ae-4b31-92fb-307267cdb5e0":"#00000073","38857a09-ad21-40d1-aeb2-b4d9c94b85db":"#0000000F","7d8446a1-f9ca-473b-ac6a-10f89be53411":"#000000D9","3feefbb7-adbb-4af0-ab84-514024de4b83":"#00000040","bcbfc202-0bd5-4e30-85c9-7fc80f59bfca":"#FFFFFF","15af2206-6215-461e-bd32-1654163eaff2":"#e1e3e5","e1d2a888-a777-4103-b116-8b760fe34112":"#c2c7ce","eeaf0ce0-7529-4040-a32b-81de7fa917bc":"#a3acb9","af6c898a-99f7-460b-bdc2-25d248a8e2ba":"#8692a1","9d68b562-ab4b-4f3f-ae20-871bdee8ddae":"#6c7888","d83ecd2b-a0d0-4cc5-9fcc-29f1f870d099":"#545f6c","81cbc70b-dd80-4cae-9ba9-aec76080c449":"#3f4750","4f4cac43-66dc-4fb4-b18e-23f9c80705a9":"#2a2f34","2e0df064-26d3-4b7f-af1b-16c74eace1a1":"#151618","9486e4f3-0027-403b-9108-e713a6f6b630":"#e2e2e2","62b58f71-15fd-4028-8063-cda09ef95646":"#c7c7c7","00824f9a-ec43-4820-82e5-ac7f08dd0e4a":"#ababab","86fd9e48-bd05-430f-960c-60ec271af1c8":"#919191","5aa1a5f2-b72f-4898-bbdf-dcb33ab7e796":"#777777","961ee3a6-ad32-4b6b-89e1-e6de09e598bc":"#5e5e5e","958917fd-c721-4385-aaae-b0f4365dfa5c":"#464646","65fdf64f-7e6d-4802-adfa-bda62551ab8e":"#2e2e2e","cf726da6-7131-4b8a-a6f3-5b00dbeca9a1":"#161616","39e17b59-8331-47d8-ab68-bfb977bb23b3":"#f8f8f7","42702f0e-e025-4fcb-a8a9-da3d7d949bbe":"#e5e2de","db8a0ee4-9108-483f-9fba-8bc96c397747":"#cdc5bc","823ae3f9-ebb4-4620-82c2-7ec0c1dd8223":"#b5aa9c","77c37296-c731-4429-8245-699e829f0e32":"#9b8f7f","0555e682-b4d0-4b1a-9179-3aa25b0e8d65":"#817566","ef23a121-c8c2-4da3-b461-4148db3f9da2":"#675c50","4f309286-878f-4779-9570-fa1cefea1bb0":"#4c443b","559eaa77-28f3-4476-92e7-8c37ea44b21d":"#322d27","8d9fdfca-7a03-4e2f-bae4-1a4c7bcd38f9":"#181613","7c85463e-ee8e-4d31-9390-f1d29c5b9aed":"#d1e4ff","4fcde6e3-2390-4e5e-a4cb-8c9d7fff28f1":"#a2caff","68e5dc28-e79c-417f-8697-b6589c9a954a":"#6faeff","0f21bc57-7e53-4812-a467-2bf38d972d58":"#3090ff","046cf9b9-f83d-4984-a373-c8dc35faa442":"#0075df","f87c7a12-1906-4e0f-ad45-9bc324a389cf":"#005db1","1e572bb2-2dd9-4228-bf5d-05f188c7933b":"#004585","2351afcd-e4d6-44dd-99ae-3f9921f5dee6":"#002e5b","77bda45c-2661-4107-8068-8020f50b418e":"#001631","36e5665a-8c18-42f9-901d-1833bc96c974":"#f5ddcf","f92f7a6f-a46c-42b6-8fb6-3aef1ac87749":"#f6b791","7580798e-a169-4ad0-8564-a1b9459d1040":"#f68c47","8d752246-5977-4076-9fd9-dc8c0cd307f8":"#de6c0b","058920a8-0b6c-4406-bafd-a95526f941f9":"#b95700","990b5e64-f116-4d20-b77b-81761d1ef89f":"#944403","010ebf63-d3ba-4d24-88bd-75f93b7d9add":"#6f3207","166afc6d-7c9d-4529-bf00-7a93b50f22b3":"#49220a","205aadd5-3728-458c-9c0b-fd9928360d83":"#231107","d4733bf4-7924-4487-81b3-7f1719501293":"#faf8ed","9de484d1-97cd-4fbe-8207-472d07009a38":"#f1e3a9","f5166278-bc70-4b66-b2e9-82cb426919ac":"#c8aa19","5a05d1c9-29ec-4527-a904-051d4d67e3cc":"#8d7500","997adaa2-6040-44c6-8ed2-f568ae218fc0":"#544406","516bb514-4e59-477c-b91c-db25b12f9465":"#382d07","85405a0d-309b-4591-997b-aecde6412907":"#f4faf3","5cb5052e-36b8-40f4-83fa-16d31c913c82":"#c6f0c5","ffb8c04c-3a6e-4e3f-93f1-596934b36a7a":"#53c954","df5ed48c-4b94-4666-95a2-c8409e666921":"#2aad2c","b2584fa2-c02a-46b9-a03b-6a0f653f4c11":"#1e7118","8331ab55-84a2-4cfa-bd41-a7e5bb2a8445":"#1a3616","67775b4a-8c94-4d0e-b505-3cebed5241e2":"#faf7f7","5c034e70-ebf8-4fab-8e88-1264d83f8550":"#f6efee","5623bd50-bd52-44c3-a2d8-3e803c5badd9":"#f3b5b0","32fb7a7e-ec45-4247-9bef-fea2ddf1e82b":"#fa444d","4aa1cb40-3efb-404f-96eb-b3d6f827f17b":"#af1129","06808d37-bc30-4716-a301-cd3c4c7a4ae2":"#4f1a1c","7417abd5-7a6d-4b44-aeaa-c81030692668":"#e3c645","2e30ec10-aadd-4864-ab99-06c92c4de8eb":"#ab8f05","c534e459-ee1b-431d-89fa-62adba603d81":"#705c03","8c344a90-0323-4df1-a92e-ae020cb9789a":"#1c1604","cffcc850-9417-4cee-9e0b-186df699ab1b":"#e6f6e6","1f2b3551-9bb3-4cd0-87ee-94db9e6bef4a":"#7ee27f","0234a65e-76cc-4d3a-bcb4-ce36b2a97f5c":"#009100","2f38107b-9bf8-45e7-b543-481e295563ff":"#23521d","9a870e04-f6c2-4ba9-8bde-7db7e4a5991a":"#0d1a0a","ad9cd0e9-255c-4acd-b958-c6d7b2f38cc7":"#f2dddb","60e6bfd1-e5f8-4fee-82b8-a540505f466e":"#f78580","5eed13dc-4cdb-44e6-abd3-822344e120c2":"#de0030","e0ef6795-6ae5-4c63-a79c-904ed9ffcf89":"#7e1a23","c12b3ef4-6148-484c-9c6c-88860a369acf":"#241010","3aa2b70c-9852-4a1d-8011-c6679b292be6":"#f7f1d9","bdc1a369-a0ae-4d83-9271-2537ecfbd831":"#f2f0ef","28cf1a9f-6b1a-460c-974f-c5ad8be2ef25":"#f8f8f8","3f74e229-2ca2-48d2-8d7c-913411a6c8d2":"#f0f1f1","f0517390-3e12-4529-bc9b-ff526c7d26d1":"#fbf7f4","eae7418e-3002-4f99-a59b-eb4ffd388dfc":"#f8efe9","1bbbb28c-401b-44be-baba-a8ff404d8196":"#f8f8f8","3a3bc55b-2884-43da-bd51-c4b18b1ef21f":"#f1f1f1","93c36389-35de-4a29-bbc2-417134e14f30":"#f4f8ff","c77dd3cf-5216-4b8b-8e72-7c4e0722cc1e":"#e8f2ff"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"59d26a5f-af20-4b55-a267-2fdce35528fb":"4px","4f4286ef-bc75-46e5-8546-d6ece86aa79f":"8px","aa2e19b0-ba41-408a-81cc-0885179411a7":"12px","f8e63dc6-41e1-419b-9871-b21867863f7f":"16px","1d7cb4b2-1bc5-4d1c-86cb-ba71161c39f7":"20px","9ec781d9-857f-421c-91b1-c414bad02fd0":"24px","d87e67c8-8c23-4a17-8eaa-0cbd1c51a243":"2px","1a2bc747-a3df-49bc-9b23-7324b4d04078":"4px","3f658df9-de42-4dd5-8c18-29b1c517efbc":"8px","4a8787dc-7d2d-4af1-ab0a-9395b8a6ac7e":"12px","2cf15f5c-788b-4899-acec-f8b78d2a9356":"16px","bcc470cd-8fce-461c-90a1-01864ae45e2f":"20px","6bc5079c-fe74-4819-af1e-f3401f72de61":"32px","b8a0c62c-d33c-402b-9a27-2003b4bcbb97":"40px","09b84691-105d-4020-b550-1af1f01f5598":"2px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"5f2f9742-8e20-413f-8138-7ebddf759e30":"400 14px/22px var(--ww-default-font-family, sans-serif)","84eecf61-5d8d-4e61-b891-daaaa7edd603":"500 38px/46px var(--ww-default-font-family, sans-serif)","1df3adb8-ac4e-48d6-bc11-52cdb9b14d67":"500 30px/40px var(--ww-default-font-family, sans-serif)","0ee96ca9-304e-498d-80b7-1f72e274fa62":"500 24px/32px var(--ww-default-font-family, sans-serif)","58fb9968-e754-4101-8464-0fc3a4d3e635":"500 16px/24px var(--ww-default-font-family, sans-serif)","f37850de-10e5-4f2f-b3f8-845a3ec2268d":"600 14px/22px var(--ww-default-font-family, sans-serif)","8b0270c7-542d-49af-8830-0dff9a7f5f36":"400 12px/20px var(--ww-default-font-family, sans-serif)","5b9600f9-64cf-4c0f-9d54-72effa4641b6":"600 16px/24px var(--ww-default-font-family, sans-serif)","63fa5c1a-fa66-4351-981e-939ec94f0426":"600 12px/18px var(--ww-default-font-family, sans-serif)","82a7a98e-d75c-4504-b315-1dea69b4686f":"400 12px/18px var(--ww-default-font-family, sans-serif)","91c955f4-2c00-4d3f-8e6e-a7ef8c424b07":"400 16px/22px var(--ww-default-font-family, sans-serif)","f9bbcc0d-8239-4bbd-9168-d3bb4d821375":"400 12px/20px var(--ww-default-font-family, sans-serif)","6a574935-48ba-4347-9fa5-93329cd5e9b8":"500 20px/28px var(--ww-default-font-family, sans-serif)","a7929318-e019-4f12-b783-fb2ceb49858c":"400 60px/60px var(--ww-default-font-family, sans-serif)","3d708daf-2fb4-42cf-b6d0-dc73a7ddbe9a":"400 48px/52px var(--ww-default-font-family, sans-serif)","ef8937c9-d612-46e1-b575-df34d61cf772":"400 36px/36px var(--ww-default-font-family, sans-serif)","35b77919-9ffd-4a95-b320-ac48e0dcdd0d":"400 24px/30px var(--ww-default-font-family, sans-serif)","8b0120d1-8561-405e-8686-ce9ffc15e01b":"400 18px/26px var(--ww-default-font-family, sans-serif)","c18254d7-8039-47af-a2ee-bb8567aafe9e":"400 16px/24px var(--ww-default-font-family, sans-serif)","9f56468c-1171-4353-b777-8603f3bc4c80":"400 12px/16px var(--ww-default-font-family, sans-serif)","b01c9b19-c2fb-43a4-8d89-6a2161647452":"300 48px/52px var(--ww-default-font-family, sans-serif)","4a1b3261-5c6f-49e4-8c3c-14ac55a3fe18":"300 24px/30px var(--ww-default-font-family, sans-serif)","0aea7eac-3f0f-4362-bf53-f3508c079f3d":"300 16px/24px var(--ww-default-font-family, sans-serif)","75485409-3387-4e0d-8512-31002bbc0060":"300 12px/16px var(--ww-default-font-family, sans-serif)","bc5e0b11-110b-4d6d-8c0b-60a8e334939b":"500 60px/60px var(--ww-default-font-family, sans-serif)","d1cd1c18-8e7c-4e45-84f7-8b239ece48f7":"500 36px/36px var(--ww-default-font-family, sans-serif)","c5db767c-ff13-4f03-8c0e-e8343e8b3327":"500 18px/26px var(--ww-default-font-family, sans-serif)","e29a9ec3-8e31-4691-a108-55611f691d23":"500 14px/20px var(--ww-default-font-family, sans-serif)","d4d4eb87-9ed9-4ce9-99d9-f9575e3a4487":"500 11px/16px var(--ww-default-font-family, sans-serif)","ba555158-4e79-4965-882b-22426889e221":"700 48px/52px var(--ww-default-font-family, sans-serif)","bdd0b067-d026-49c4-835c-591584716800":"700 24px/30px var(--ww-default-font-family, sans-serif)","a301e1f8-f8bb-4f3a-bffc-684de0a945b4":"700 16px/24px var(--ww-default-font-family, sans-serif)","fa27788c-1e85-4d2d-b9a5-2c0389cea109":"700 12px/16px var(--ww-default-font-family, sans-serif)","ec0a8ffd-3a89-42c6-ba27-cce5b736bb14":"400 14px/20px var(--ww-default-font-family, sans-serif)","e5113261-2181-432d-acc5-767fa0d57e07":"400 11px/16px var(--ww-default-font-family, sans-serif)","a0c19588-b9e1-4e34-8610-5fb4d3fb3fe1":"300 60px/60px var(--ww-default-font-family, sans-serif)","86753b44-8c81-4e14-bbd9-fa658563da0f":"300 36px/36px var(--ww-default-font-family, sans-serif)","1f0ebd06-1adc-425b-b115-b4bbe7bca236":"300 18px/26px var(--ww-default-font-family, sans-serif)","37be5e96-87fb-42f8-988d-570c56419795":"300 14px/20px var(--ww-default-font-family, sans-serif)","6b075330-1ed5-4e1e-9195-51073004bede":"300 11px/16px var(--ww-default-font-family, sans-serif)","4a24c9b1-53e7-4a71-9d97-4b9abdfc023e":"500 48px/52px var(--ww-default-font-family, sans-serif)","6612fbdf-67a9-4cee-8b7c-34dca9df5b8a":"500 24px/30px var(--ww-default-font-family, sans-serif)","61f8d4d7-6650-4260-acc2-56311564884c":"500 16px/24px var(--ww-default-font-family, sans-serif)","c1c4b94c-40ed-40b6-9282-4cc2ec273bdd":"500 12px/16px var(--ww-default-font-family, sans-serif)","b0b012a1-af3e-471b-acb1-7855a676687b":"700 60px/60px var(--ww-default-font-family, sans-serif)","7976efc9-f4b3-43c8-ad3a-5bb8db021708":"700 36px/40px var(--ww-default-font-family, sans-serif)","a9dac6cf-47a3-435c-b9d7-230c0d187bd4":"700 18px/26px var(--ww-default-font-family, sans-serif)","a5339dc3-3f30-4dd9-a3c4-3fd94a47bdcd":"700 14px/20px var(--ww-default-font-family, sans-serif)","3bc4c349-5211-41f9-a20d-7fe8918672ea":"700 11px/16px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
