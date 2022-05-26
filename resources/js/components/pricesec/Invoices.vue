<template>
    <section>
        <TheHeader></TheHeader>
        <table class="table table-striped">
            <thead class="thead-dark table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Price/Day</th>
                    <th scope="col">Email</th>
                    <th scope="col">Card Name</th>
                    <th scope="col">Days</th>
                    <th scope="col">Total Paid</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="invoice in invoices" :key="invoice.index">
                    <th scope="row">{{ invoice.id }}</th>
                    <td>{{ invoice.brand }}</td>
                    <td>{{ invoice.model }}</td>
                    <td>${{ invoice.priceday }}</td>
                    <td>{{ invoice.email }}</td>
                    <td>{{ invoice.cardname }}</td>
                    <td>{{ invoice.days }}</td>
                    <td>${{ invoice.total }}</td>
                </tr>
            </tbody>
        </table>
        <TheFooter class="fixed-bottom"></TheFooter>
    </section>
</template>

<script>
import TheFooter from "../../components/layout/TheFooter.vue";
import TheHeader from "../../components/layout/TheHeader";
export default {
    components: { TheHeader, TheFooter },
    data() {
        return {
            invoices: [],
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        async loadData() {
            const response = await axios.get("api/invoices");
            this.invoices = response.data;
        },
    },
};
</script>

<style scoped></style>
