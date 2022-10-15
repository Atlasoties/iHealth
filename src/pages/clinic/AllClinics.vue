<template>
    <base-layout page-title="Clinic Services" page-default-back-link="categories">
        <ion-card v-for="clinic in clinics" :key="clinic.id">
            <ion-card-header>
                <ion-card-subtitle> {{clinic.name}}</ion-card-subtitle>
                <ion-card-title>{{clinic.company_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{clinic.typeOfService}}</p>
                <p>{{clinic.serviceName}}</p>
                <p>{{clinic.serviceAvailablity}}</p>
                <p>{{clinic.company_phone}}</p>
                <p>{{clinic.company_address}}</p>
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
    name: 'clinicCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            clinics: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/clinic/services${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.clinics = res.data.result
                console.log(this.clinics);
            })
            .catch(err => console.log(err))
    }
}
</script>