<template>
  
       <div class="d-flex flex-row flex-wrap py-0 px-0" style="align-items: center;justify-content: center;width:100%;">

        <div style="width: 100%;" class="d-flex flex-row mb-2" v-if="!disabled"> 
             <div class="mr-1">
                 <button @click="handleAction('add_row')" class="iconWrapper px-1 px-1">+ row</button>
             </div>

              <div>
                 <button  @click="handleAction('add_column')" class="iconWrapper px-1 px-1">+ Column</button>
             </div>
        </div>

    
         <div style="width: 100%; " class="d-flex flex-row flex-wrap">

             <div class="px-1 d-flex flex-row mb-2 " style="align-items: center; width: 100%;" v-for="(row,indexParent) in matrix" :key="indexParent + 'first'" >

                 <input :disabled="disabled" v-for="(column,index) in row" @focus="handleFocus(indexParent,index)" :value="column" @input="updateValue" :key="index + 'firstIDColumn'" type="tel" class="inputStyle py-1 px-1  mr-1 text-center" style="width:33px;">

             </div>
           
       </div>
   </div>    

</template>

<script>
 export default {
    props:['disabled','matrix'],
    data () {
      return {
        focusedMapper:[],
      }
    },
    methods:{
        handleAction:function(type){

            let newValue = [0]
          
           if(type == 'add_column'){

             this.matrix.forEach((row)=>{
                row.push(newValue);
             })
             
           }else if('add_row'){

             let matrixRowlength = this.matrix[0].length;

             let newRow = [];

              let counter = new Array(matrixRowlength);

              for (var i = 0; i < counter.length; i++) {
                  
                   newRow.push(newValue);
              }

              this.matrix.push(newRow);

           }

        },
        updateValue:function(e){

            let input = e.target.value;

             this.matrix[this.focusedMapper[0]][this.focusedMapper.[1]] = input;

           
        },
        handleFocus(parentIndex,childIndex){

             this.focusedMapper = [];

             this.focusedMapper.push(parentIndex);

             this.focusedMapper.push(childIndex);

          
        },
    }
  }
</script>
<style scoped>
 .inputStyle{
  border:1px solid #264653;
  width:100%;
  background: whitesmoke;
  border-radius:3px; 
  font-family:BodyFont; 
  font-size:13px;
 }  

 .iconWrapper{
    background: #264653;
    color: white;
    border: 1px solid #264653;
    border-radius: 50%;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 5px;
 }

</style>
