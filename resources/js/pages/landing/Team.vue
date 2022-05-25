<template>
    <TheHeader class="fixed-top"></TheHeader>
    <TeamSect></TeamSect>
    <TheFooter class="fixed-bottom"></TheFooter>
</template>

<script>
import TeamSect from "../../components/teamsec/TeamSect.vue";
import TheFooter from "../../components/layout/TheFooter.vue";
import TheHeader from "../../components/layout/TheHeader";

export default {
    components: { TheHeader, TheFooter, TeamSect },
};
</script>
