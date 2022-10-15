<template>
    <base-layout page-title="Hospital Services" page-default-back-link="categories">
        <ion-card v-for="hospital in hospitals" :key="hospital.id">
            <ion-card-header>
                <ion-card-subtitle> {{hospital.name}}</ion-card-subtitle>
                <ion-card-title>{{hospital.company_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{hospital.typeOfService}}</p>
                <p>{{hospital.serviceName}}</p>
                <p>{{hospital.serviceAvailablity}}</p>
                <p>{{hospital.company_phone}}</p>
                <p>{{hospital.company_address}}</p>
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
    name: 'hospitalCategories',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            hospitals: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/hospital/services${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.hospitals = res.data.result
                console.log(this.hospitals);
            })
            .catch(err => console.log(err))
    }
}
</script>