<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/"></ion-back-button>
                </ion-buttons>
                <!-- <ion-icon @click="Search" name="search" slot="end"></ion-icon> -->
                <!-- <ion-searchbar animated="true" placeholder="Search"></ion-searchbar> -->

                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>

            <slot />
        </ion-content>
    </ion-page>
</template>
  
<script>
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonContent,
    // IonSearchbar,
} from "@ionic/vue";
export default {
    props: ["pageTitle", "pageDefaultBackLink"],
    components: { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonButtons, IonBackButton },
    data() {
        return {
            search: false,
        }
    },
    methods:
    {
        Search() {
            this.search = !this.search;
        }
    }
};
</script>