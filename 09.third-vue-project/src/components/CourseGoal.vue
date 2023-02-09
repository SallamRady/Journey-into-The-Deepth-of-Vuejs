<template>
    <section>
        <h3>Course Goals</h3>
        <ul>
            <li v-for="(goal,index) in goals" :key="goal">
                <slot name="goalItem" :goal="goal" :index="index"></slot>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data(){
            return {
                goals:[
                    'Finish the course and learn Vue!',
                    'Became a Vue Master!'
                ]
            }
        }
    }
</script>