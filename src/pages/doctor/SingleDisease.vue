<template>
    <base-layout page-title="Sub Categories" page-default-back-link="categories">
        <ion-card v-for="disease in diseases" :key="disease.doctor_categorizes_id" :router-link='"/list/"+disease.id'>
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
    name: 'SingleDisease',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    data() {
        return {
            diseases: "",
            doctorID: '',
        }
    },
    created() {
        axios
            .get(`https://www.tenawo.com/auth/client/doctor/sub-categories/${this.$route.params.id}`, {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            })
            .then(res => {
                this.diseases = res.data.result;
                console.log(this.diseases)
            })
            .catch(err => console.log(err.message))
    }
}
</script>