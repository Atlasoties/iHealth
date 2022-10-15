<template>
    <base-layout page-title="Diagnostic Services" page-default-back-link="categories">
        <ion-card v-for="diagnostic in diagnostics" :key="diagnostic.id">
            <ion-card-header>
                <ion-card-subtitle> {{diagnostic.typesOfImagining}}</ion-card-subtitle>
                <ion-card-title>{{diagnostic.imaginingName}}</ion-card-title>
                <ion-card-title>{{diagnostic.company_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{diagnostic.imaginingAvailablity}}</p>
                <p>{{diagnostic.company_phone}}</p>
                <p>{{diagnostic.company_address}}</p>
            </ion-card-content>
        </ion-card>
    </base-layout>
</template>

<script>
import axios from 'axios';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
const LOCATION = process.env.VUE_APP_LOCATION
const TOKEN = process.env.VUE_APP_TOKEN
export default {
    name: 'laboratoyCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            diagnostics: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/diagnostic-images/imagining${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.diagnostics = res.data.result
                console.log(this.diagnostics);
            })
            .catch(err => console.log(err))
    }
}
</script>