<template>
  <div class="hello">
      <br>
      <br>
      <br>
      <br>
      <b-container>
          <b-row>
              <b-col cols="12" md="8" lg="8">
                  <h1>{{boxList.title}}</h1>
                  <p>{{boxList.description}}</p>
                  
              </b-col>
              <b-col cols="12"  md="4" lg="4" class="">
                <h3>Click on box to set value</h3>
                <b-row>
                    <b-col v-for="(box, i) in boxList.blocks" :key="i"  cols="6" md="6" lg="6">
                        <div class="box p-5 mt-4" :class="[box.value == 0 ? 'bg-regular':'bg-active']" @click="setValue(i)">
                            {{box.value}}
                        </div>
                    </b-col>
                </b-row>
              </b-col>
          </b-row>
      </b-container>
   
    <b-modal id="boxStatus" title="Status">
        <p class="my-4">Good job on completing your collection!</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'collection',
  data () {
    return {

    }
  },
  computed : {
    boxList(){
        return this.$store.getters.GET_BOXS
    }
  },
  methods:{
    setValue(index){

        let boxData = JSON.parse(JSON.stringify(this.$store.getters.GET_BOXS))
        //console.log("setValue => index", index, ", boxData.blocks[index].val ", boxData.blocks[index].value )

        if(boxData.blocks[index].value == 100){
            boxData.blocks[index].value = 0
        }else if(boxData.blocks[index].value == 0){
            boxData.blocks[index].value = 100
        }
        
        //console.log("boxData.blocks[index].val ", boxData.blocks[index].value)
        this.$store.dispatch("addBOXS", boxData);
        
        let completedBoxCount = 0
        boxData.blocks.forEach(box => {
            if(box.value === 100){
                completedBoxCount++
            }
        });

        if(boxData.blocks.length === completedBoxCount){
            this.$bvModal.show("boxStatus")
        }
        
    },
  }
}
</script>

<style scoped>
.bg-active{
    background-color: Purple;
}
.bg-regular{
    background-color: gray;
}
.box{
    padding: 10px;
    color: #fff;
    cursor: pointer;
}

</style>
