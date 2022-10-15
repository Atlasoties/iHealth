<template>
    <base-layout page-title="Drug Categories" page-default-back-link="categories">
        <ion-card v-for="drug in drugs" :key="drug.id" :router-link='"/single/"+drug.id'>
            <ion-card-header>
                <ion-card-subtitle> {{drug.name}}</ion-card-subtitle>
                <ion-card-title>{{drug.name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                {{drug.name}}
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
const TOKEN = process.env.VUE_APP_TOKEN
export default {
    name: 'DrugCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            drugs: "",
        }
    },
    created() {
        axios
            .get('https://www.tenawo.com/auth/client/drugs/categories', {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.drugs = res.data.result
                console.log(this.drugs);
            })
            .catch(err => console.log(err))
    }
}
</script>