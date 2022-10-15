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
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDM0ODAwZjFhYmNiOTUwMzdkZTQ2ODIxNjVhYjE1MmZmYTZhMWEzNWE1NWUyMWE1ZGY0OWUzODBiMTViMTY5Mzk1YWNlY2ZkNjA4NGIwNDIiLCJpYXQiOjE2NjU1NjM2NDQuMDA3MDkyOTUyNzI4MjcxNDg0Mzc1LCJuYmYiOjE2NjU1NjM2NDQuMDA3MDk3MDA1ODQ0MTE2MjEwOTM3NSwiZXhwIjoxNjk3MDk5NjQ0LjAwMzU5Nzk3NDc3NzIyMTY3OTY4NzUsInN1YiI6IjIxMDEiLCJzY29wZXMiOltdfQ.UIgD_Anac9WsjJCeST5WkTMfYZ3UqLQuqq2WRqzI0N7MxsEKWzOwXLO084Siz-c4bkRfquY6dZnMdaNQIavsDVIHvnjXFlmRL8tv39XtP44IAoaY5gc5NYTsxzBw3scT2nxjso-LvW1m5e242sHBiYIw0tEIXhp0wH_xW7oAVgf1vRjjPSNgsiAUT_ElIGouseVy_3s_YHVFqn4z_xpWpS3DbhWVaTYDNZfvyvhSqARPq3guBOiZCbhn6_K9hplJI5NdneG6oFLbxI7QDBaX3p1RPocNYACmCk9e4tCFwGsmxImKeiEzIt4vqxve6RiU7JCFCzBN5OMjOMIAoz4CVSFElxjz8dJ5sGdX-b-Uz-ET9VfHpUlgA0KiHjmFoMLWf-p0OCWA57cpmSU7QoexgaE5Ui8kVFcdrT6Tw4oyWWv_NjUzBjknUPezXAnj-17FRKZu3MZLVJtTkAMKSRvxKzOJLou3FYyudLtCdOSLY_cqmFw-2M98k-NJ-xeU7tg1ehhdC4J_BobovKvN72-TE-SQjmjxaOQp06XKIM-n-lNNjE_FoPSGw0N-SO21dKf4dSaC9HDEk9twHwFfkWSQx2eLV7tRpvIn-wAQElNOwoVQgYcdDnteYN-xLccM9GCABZvemDwpzRICWlwj7VZMrzoFbgUYo7gztm_Ft1eEPDQ"
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
            .get(`https://www.tenawo.com/auth/client/medical-wholesalers/products?client_current_latitude=9.016148&client_current_longitude=38.824198`, {
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