<template>
    <div id="tab_aut">
     

        <div class="col-md-6">
            <h4>Listagem de Patentes</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cor</th>
                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(p, indice) in patentes" :key ="p.id" :class="{ active: indice == currentIndex }">
                            <td>{{p.id}}</td>
                            <td>{{p.nome}}</td>
                            <td>{{p.cor}}</td>
                                                
                            <td><button v-on:click="setCurrentPatentes(p, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remPatentes(p, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentPatentes">
                    <h4>Patentes</h4>
                    <div>
                    <label><strong>id:</strong></label> {{ currentPatentes.id }}
                    </div>
                    <div>
                    <label><strong>Nome:</strong></label> {{ currentPatentes.nome }}
                    </div>
                    <div>
                    <label><strong>Cor:</strong></label> {{ currentPatentes.cor }}
                    </div>

                    <a class="badge badge-warning"
                    :href="'/Patentes/' + currentPatentes.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Player...</p>
                <router-link to="/addPatentes" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import PatenteDataService from '../../services/PatenteDataService'     
 
     export default{
      name:'listPatentes',
      data() {
             return {
                 patentes: [],
                 currentPatentes: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarPatentes(){

                PatenteDataService.list().then(response =>{

                    console.log("Retorno do seviço authenticatePatentes", response.status);

                   this.patentes = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listPatentes');
                    console.log(response);
                });
            },
            setCurrentPatentes(patentes, index){

                this.currentPatentes = patentes;
                this.currentIndex = index;
            },
            remPatentes(patentes, index){

                PatentesDataService.delete(patentes.id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });

            },
            refreshList() {
                this.listarPatentes();
                this.currentTutorial = null;
                this.currentIndex = -1;
            }

         },
         mounted() {
            this.listarPatentes();
         }
 
     }
 </script>
    
 <style scoped>

    .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }

     
 </style>