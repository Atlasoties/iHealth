<template>
    <base-layout page-title="Medical Wholesalers" page-default-back-link="categories">
        <ion-card v-for="sale in wholesalers" :key="sale.id">
            <ion-card-header>
                <ion-card-subtitle> {{sale.cost}} Birr</ion-card-subtitle>
                <ion-card-title>{{sale.name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{sale.company_name}}</p>
                <p>{{sale.manufacturing_company}}</p>
                <p>{{sale.madeIn}}</p>
                <p>{{sale.unit}}</p>
                <p>{{sale.company_phone}}</p>
                <p>{{sale.company_address}}</p>
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
            wholesalers: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/medical-wholesalers/products${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.wholesalers = res.data.result
                console.log(this.wholesalers);
            })
            .catch(err => console.log(err))
    }
}
</script>