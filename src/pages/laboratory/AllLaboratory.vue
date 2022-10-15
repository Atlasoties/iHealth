<template>
    <base-layout page-title="Laboratory Services" page-default-back-link="categories">
        <ion-card v-for="laboratory in laboratories" :key="laboratory.id">
            <ion-card-header>
                <ion-card-subtitle> {{laboratory.testCost}} Birr</ion-card-subtitle>
                <ion-card-title>{{laboratory.company_name}}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <p>{{laboratory.typeOfTest}}</p>
                <p>{{laboratory.testName}}</p>
                <p>{{laboratory.testAvailablity}}</p>
                <p>{{laboratory.company_phone}}</p>
                <p>{{laboratory.company_address}}</p>
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
            laboratories: "",
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/labratory/tests${LOCATION}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.laboratories = res.data.result
                console.log(this.laboratories);
            })
            .catch(err => console.log(err))
    }
}
</script>