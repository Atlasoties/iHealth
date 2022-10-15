<template>
    <base-layout page-title="Ambulance Services">
        <ion-card v-for="service in services" :key="service.id">
            <ion-card-header>
                <ion-card-subtitle> {{service.cost}} Birr</ion-card-subtitle>
                <ion-card-title>{{service.name}}</ion-card-title>
                <ion-card-title>{{service.type}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{service.company_name}}</p>
                <p>{{service.manufacturing_company}}</p>
                <p>{{service.madeIn}}</p>
                <p>{{service.unit}}</p>
                <p>{{service.company_phone}}</p>
                <p>{{service.company_address}}</p>
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
            services: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/medical-tourism/service${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.services = res.data.result
                console.log(this.services);
            })
            .catch(err => console.log(err))
    }
}
</script>