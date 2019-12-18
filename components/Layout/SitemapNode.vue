<template>
    <li :key="node.path" v-if="node.namespace === namespace" class="nav-item" :class="nodeClass(node)">
        <nuxt-link :to="(node.containerOnly && node.node && node.node.length > 0) ? node.node[0].path : node.path" :class="nuxtLinkClass(node)">
            <span class="node-icon" v-if="node.icon"><i :class="(node.iconPrefix ? node.iconPrefix : 'fas') + ' fa-'+ node.icon" class="fa-fw"></i></span>
            <span class="node-title">{{ node.title }}</span>
        </nuxt-link>
        <ul v-if="node.node && node.node.length > 0">
            <sitemap-node v-for="childNode in node.node" :node="childNode" :namespace="namespace" :key="childNode.path"></sitemap-node>
        </ul>
    </li>
</template>

<script>
export default {
    name: "SitemapNode",
    props: [
        'node',
        'namespace'
    ],
    methods: {
        nodeClass(node){
            return {
                'node-active': (this.$route.fullPath.startsWith(node.path)),
                'dropdown': (node.node && node.node.length > 0)
            }
        },
        nuxtLinkClass(node){
            return {
                'node-active': (this.$route.fullPath.startsWith(node.path)),
                'dropdown-toggle': (node.node && node.node.length > 0)
            }
        }
    }
}
</script>
