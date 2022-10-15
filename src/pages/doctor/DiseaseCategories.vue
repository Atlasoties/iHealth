<template>
    <base-layout page-title="Doctors Categories" page-default-back-link="categories">
        <ion-card router-link="/all/doctors">
            <ion-card-header>
                <ion-card-title>All Doctors</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-card v-for="disease in diseases" :key="disease.id" :router-link='"/singledoc/"+disease.id'>
            <ion-card-header>
                <ion-card-subtitle> {{disease.name}}</ion-card-subtitle>
                <ion-card-title>{{disease.name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                {{disease.name}}
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
const TOKEN = process.env.VUE_APP_TOKEN
export default {
    name: 'DiseaseCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            diseases: "",
        }
    },
    created() {
        axios
            .get('https://www.tenawo.com/auth/client/doctor/categories', {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.diseases = res.data.result
                console.log(this.diseases);
            })
            .catch(err => console.log(err))
    }
}
</script>