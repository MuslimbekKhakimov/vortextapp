<template>
    <section class="whole-page">
        <ChatsBlock></ChatsBlock>
        <MessagesBlock></MessagesBlock>
    </section>
</template>
<script>
import ChatsBlock from '@/components/layouts/ChatsBlock.vue'
import MessagesBlock from '@/components/layouts/MessagesBlock.vue';
import { mapState } from 'vuex';
export default {
    name: "WholePage",
    components: {
        ChatsBlock,
        MessagesBlock
    },
    watch: {
        scrollMenuClickIndex(then, old) {
            let tabFolders = document.querySelectorAll(".tab-folder-items")
            if (tabFolders) {
                tabFolders.forEach((e, index) => {
                    e.classList.remove("tab-folder-activate-left")
                    e.classList.remove("tab-folder-activate-right")
                    e.classList.remove("tab-folder-activate-orders")
                    e.classList.remove("tab-folder-activate-left-back")
                    e.classList.remove("tab-folder-activate-right-back")
                    if (index === then) {
                        e.style = ""
                    }
                    else if (index === old) {
                        e.style = ""
                    }
                    else {
                        e.classList.add("tab-folder-activate-orders")
                    }
                })
                if (then > old) {
                    tabFolders[old].classList.add("tab-folder-activate-left")
                    tabFolders[then].classList.add("tab-folder-activate-right")
                }
                else {
                    tabFolders[old].classList.add("tab-folder-activate-left-back")
                    tabFolders[then].classList.add("tab-folder-activate-right-back")
                }
            }
        }
    },
    computed: {
        ...mapState({ scrollMenuClickIndex: state => state.leftSide.items.scollMenuClickIndex })
    }
}
</script>
<style>
.whole-page {
    position: relative;
    widows: 100%;
    height: 100%;
    display: flex;
}


.tab-folder-activate-orders {
    display: none;
}

.tab-folder-activate-right {
    animation: tab-folder-activate-right .5s ease-out forwards;
}

.tab-folder-activate-left {
    animation: tab-folder-activate-left .5s ease-out forwards;
}


@keyframes tab-folder-activate-left {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}


@keyframes tab-folder-activate-right {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}

.tab-folder-activate-right-back {
    animation: tab-folder-activate-right-back .5s ease-out forwards;
}

.tab-folder-activate-left-back {
    animation: tab-folder-activate-left-back .5s ease-out forwards;
}

@keyframes tab-folder-activate-right-back {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}

@keyframes tab-folder-activate-left-back {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}
</style>